// 🔧 Polyfills MUST come first (before i18n or anything that might use Intl/URL)
import 'react-native-url-polyfill/auto';
import './src/polyfills';

// i18n init (now safe)
import './src/i18n';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from './src/screens/Auth/LoginScreen';
import SignupScreen from './src/screens/Auth/SignupScreen';
import TabNavigator from './src/navigation/TabNavigator';

const Stack = createStackNavigator();

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null; // (optional) show a loading screen here

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <AppContent />
      </NavigationContainer>
    </AuthProvider>
  );
}
