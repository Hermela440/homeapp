import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const ForYouScreen = () => {
  const { theme, followCategory, followedCategories } = useTheme();

  const categories = [
    { id: '1', name: 'መንፈሳዊ (Spiritual)' },
    { id: '2', name: 'ሰብኣዊ ምዕባለ (Personal development)' },
    { id: '3', name: 'ቢዝነስ (Business)' },
    { id: '4', name: 'መርዓን ሓዳርን (Relationship)' },
    { id: '5', name: 'ሓበሬታ (Information)' },
    { id: '6', name: 'ትረኻታት (Stories)' },
    { id: '7', name: 'ጽባቐ ኣስመራ (Beauty of Asmara)' },
    { id: '8', name: 'ነውሪታት (Incedencies)' },
    { id: '9', name: 'ስድራቤት (Family)' },
    { id: '10', name: 'ቤትሰናይ (senaystudio)' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>For You</Text>
      <ScrollView style={styles.scrollContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryItem,
              {
                backgroundColor: followedCategories.includes(category.name)
                  ? '#007AFF'
                  : theme.colors.tagBackground || '#f0f0f0'
              }
            ]}
            onPress={() => followCategory(category.name)}
          >
            <Text style={[
              styles.categoryText,
              {
                color: followedCategories.includes(category.name)
                  ? '#ffffff'
                  : theme.colors.text
              }
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
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
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  categoryItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
  },
});

export default ForYouScreen;