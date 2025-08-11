import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = { PRIMARY: '#8B4513', BACKGROUND: '#ffffff', MUTED: '#6b7280' };

export default function ProfileScreen() {
  const menuItems = [
    { title: 'My Orders', icon: 'receipt' as const, subtitle: 'Track your purchases' },
    { title: 'Wishlist', icon: 'heart' as const, subtitle: 'Save your favorite pipes' },
    { title: 'Settings', icon: 'settings' as const, subtitle: 'App preferences' },
    { title: 'Help & Support', icon: 'help-circle' as const, subtitle: 'Get assistance' },
    { title: 'About Telemax', icon: 'information-circle' as const, subtitle: 'Our story' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.profileHeader}>
          <Ionicons name="person-circle" size={80} color={COLORS.PRIMARY} />
          <Text style={styles.profileName}>Welcome, Pipe Enthusiast!</Text>
          <Text style={styles.profileEmail}>Sign in to access your account</Text>
        </View>

        <View style={styles.menuItems}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Ionicons name={item.icon} size={24} color={COLORS.PRIMARY} />
              <View style={styles.menuItemText}>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
                <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.BACKGROUND },
  section: { padding: 20 },
  profileHeader: { alignItems: 'center', marginBottom: 30 },
  profileName: { fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 12 },
  profileEmail: { fontSize: 14, color: COLORS.MUTED, marginTop: 4 },
  menuItems: { marginTop: 20 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16, paddingHorizontal: 4, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  menuItemText: { flex: 1, marginLeft: 16 },
  menuItemTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  menuItemSubtitle: { fontSize: 14, color: COLORS.MUTED, marginTop: 2 },
});
