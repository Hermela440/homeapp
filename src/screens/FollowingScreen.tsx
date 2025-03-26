import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const FollowingScreen = () => {
  const { theme, followedCategories } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>Following</Text>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {followedCategories.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Text style={[styles.categoryText, { color: theme.colors.text }]}>{category}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  categoryItem: {
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#333333',
  },
  categoryText: {
    fontSize: 16,
  },
});

export default FollowingScreen;