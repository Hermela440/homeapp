import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const SearchScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={[styles.header, { color: theme.colors.text }]}>Explore</Text>

      <View style={styles.searchContainer}>
        <Text style={[styles.searchText, { color: theme.colors.text }]}>Search Medium</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
  },
  searchContainer: {
    padding: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchText: {
    fontSize: 16,
    color: '#888',
  },
});

export default SearchScreen;