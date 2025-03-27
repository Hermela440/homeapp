import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const HomeScreen = () => {
  const { theme, followedCategories } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: 10,
    },
    categoryList: {
      paddingHorizontal: 10,
    },
    categoryItem: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginRight: 8,
      borderRadius: 6,
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
      paddingHorizontal: 16,
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 12,
      color: theme.colors.text,
    },
  });

  return (
    <View style={styles.container}>
      {/* Horizontal FlatList for better performance */}
      <FlatList
        data={followedCategories}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.categoryList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        )}
      />

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.header}>Home Screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
