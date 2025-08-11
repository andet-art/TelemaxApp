import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const COLORS = { PRIMARY: '#8B4513', BACKGROUND: '#ffffff', MUTED: '#6b7280' };

export default function HomeScreen() {
  const featuredPipes = [
    { name: 'Classic Briar', price: '$89.99', icon: 'leaf' as const },
    { name: 'Vintage Meerschaum', price: '$159.99', icon: 'diamond' as const },
    { name: 'Artisan Special', price: '$229.99', icon: 'star' as const },
  ];

  const features = [
    { icon: 'hammer' as const, title: 'Handcrafted', text: 'Made by skilled artisans' },
    { icon: 'shield-checkmark' as const, title: 'Quality Guaranteed', text: 'Premium materials only' },
    { icon: 'rocket' as const, title: 'Fast Shipping', text: 'Worldwide delivery' },
    { icon: 'star' as const, title: 'Best Quality', text: '70+ years of expertise' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Ionicons name="leaf" size={64} color={COLORS.PRIMARY} />
        <Text style={styles.heroTitle}>Welcome to Telemax</Text>
        <Text style={styles.heroSubtitle}>Premium Tobacco Pipes Since 1950</Text>
        <Text style={styles.heroText}>
          Discover our collection of handcrafted tobacco pipes, made with premium materials and traditional techniques.
        </Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Shop Now</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Telemax?</Text>
        <View style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <Ionicons name={feature.icon} size={32} color={COLORS.PRIMARY} />
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureText}>{feature.text}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Pipes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredPipes.map((pipe, index) => (
            <View key={index} style={styles.pipeCard}>
              <Ionicons name={pipe.icon} size={40} color={COLORS.PRIMARY} />
              <Text style={styles.pipeName}>{pipe.name}</Text>
              <Text style={styles.pipePrice}>{pipe.price}</Text>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.BACKGROUND },
  heroSection: { alignItems: 'center', padding: 30, backgroundColor: '#f8f8f8' },
  heroTitle: { fontSize: 24, fontWeight: 'bold', color: '#333', marginTop: 16 },
  heroSubtitle: { fontSize: 16, color: COLORS.PRIMARY, marginBottom: 12, fontWeight: '600' },
  heroText: { fontSize: 16, color: COLORS.MUTED, textAlign: 'center', lineHeight: 24, marginBottom: 20 },
  heroButton: { backgroundColor: COLORS.PRIMARY, flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 25 },
  heroButtonText: { color: '#fff', fontSize: 16, fontWeight: '600', marginRight: 8 },
  section: { padding: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 16 },
  featuresContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  featureCard: { width: (width - 60) / 2, backgroundColor: '#f9f9f9', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 16 },
  featureTitle: { fontSize: 14, fontWeight: '600', color: '#333', marginTop: 8, marginBottom: 4 },
  featureText: { fontSize: 12, color: COLORS.MUTED, textAlign: 'center' },
  pipeCard: { width: 160, backgroundColor: '#f9f9f9', borderRadius: 12, padding: 16, marginRight: 16, alignItems: 'center' },
  pipeName: { fontSize: 14, fontWeight: '600', color: '#333', marginTop: 8, marginBottom: 4 },
  pipePrice: { fontSize: 16, color: COLORS.PRIMARY, fontWeight: 'bold', marginBottom: 8 },
  addToCartButton: { backgroundColor: COLORS.PRIMARY, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  addToCartText: { color: '#fff', fontSize: 12, fontWeight: '600' },
});
