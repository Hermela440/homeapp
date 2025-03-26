import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const HomeScreen = () => {
  const { theme, followedCategories } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    headerScroll: {
      padding: 16,
      flexDirection: 'row',
    },
    categoryItem: {
      padding: 8,
      marginRight: 8,
      borderRadius: 8,
      backgroundColor: '#444444',
    },
    categoryText: {
      fontSize: 14,
      color: theme.colors.text,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: theme.colors.text,
    },
  });

  return (
    <View style={styles.container}>
      {/* Horizontal ScrollView for Followed Categories */}
      <ScrollView horizontal style={styles.headerScroll} showsHorizontalScrollIndicator={false}>
        {followedCategories.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.header}>Home Screen</Text>
        {/* Add your main content here */}
      </View>
    </View>
  );
};

export default HomeScreen;