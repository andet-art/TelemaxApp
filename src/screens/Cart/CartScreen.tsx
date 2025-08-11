import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = { PRIMARY: '#8B4513', BACKGROUND: '#ffffff', MUTED: '#6b7280' };

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.emptyState}>
        <Ionicons name="bag-outline" size={64} color="#ccc" />
        <Text style={styles.emptyStateTitle}>Your cart is empty</Text>
        <Text style={styles.emptyStateText}>
          Browse our collection and add some beautiful pipes to your cart
        </Text>
        <TouchableOpacity style={styles.shopNowButton}>
          <Text style={styles.shopNowButtonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.BACKGROUND },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  emptyStateTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 16, marginBottom: 8 },
  emptyStateText: { fontSize: 16, color: COLORS.MUTED, textAlign: 'center', lineHeight: 24, marginBottom: 24 },
  shopNowButton: { backgroundColor: COLORS.PRIMARY, paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  shopNowButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
