import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const COLORS = { PRIMARY: '#8B4513', BACKGROUND: '#ffffff', MUTED: '#6b7280' };

export default function CatalogScreen() {
  const categories = [
    { name: 'Briar Wood Pipes', count: '15 items', icon: 'leaf' as const },
    { name: 'Meerschaum Pipes', count: '8 items', icon: 'diamond' as const },
    { name: 'Corn Cob Pipes', count: '12 items', icon: 'nutrition' as const },
    { name: 'Artisan Collection', count: '5 items', icon: 'star' as const },
    { name: 'Vintage Collection', count: '7 items', icon: 'time' as const },
    { name: 'Beginner Pipes', count: '10 items', icon: 'heart' as const },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Pipe Collection</Text>
        <View style={styles.catalogGrid}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Ionicons name={category.icon} size={32} color={COLORS.PRIMARY} />
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCount}>{category.count}</Text>
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
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 16 },
  catalogGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  categoryCard: { width: (width - 60) / 2, backgroundColor: '#f9f9f9', padding: 20, borderRadius: 12, alignItems: 'center', marginBottom: 16 },
  categoryName: { fontSize: 14, fontWeight: '600', color: '#333', marginTop: 8, textAlign: 'center' },
  categoryCount: { fontSize: 12, color: COLORS.MUTED, marginTop: 4 },
});
