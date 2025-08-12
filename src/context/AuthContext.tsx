import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signin, signup as signupRequest } from '../services/api';
 // adjust path if needed

interface User {
  id: number;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: any) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) setUser(JSON.parse(storedUser));
      setIsLoading(false);
    })();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await signin({ email, password });
      const { token, user: backendUser } = res.data;

      if (!token || !backendUser) return false;

      await AsyncStorage.setItem('user', JSON.stringify(backendUser));
      await AsyncStorage.setItem('token', token);
      setUser(backendUser);

      return true;
    } catch (err: any) {
      console.error('Login error:', err.response?.data || err.message);
      return false;
    }
  };

  const signup = async (userData: any): Promise<boolean> => {
    try {
      const res = await signupRequest({
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password
      });
      return res.data?.message === 'User created';
    } catch (err: any) {
      console.error('Signup error:', err.response?.data || err.message);
      return false;
    }
  };

  const logout = async () => {
    await AsyncStorage.multiRemove(['user', 'token']);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      signup,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};
