import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const LibraryScreen = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('Saved lists'); // Default to "Saved lists"

  const tabs = ['Your lists', 'Saved lists', 'Highlights', 'Reading history']; // All tabs included

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Your library</Text>
        <TouchableOpacity style={styles.newListButton}>
          <Text style={[styles.newListText, { color: theme.colors.primary }]}>New list</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && {
                borderBottomColor: theme.colors.primary,
                borderBottomWidth: 2
              }
            ]}
          >
            <Text style={[
              styles.tabText,
              { color: theme.colors.text },
              activeTab === tab && { color: theme.colors.primary }
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Area */}
      <View style={styles.content}>
        <Text style={[styles.offlineTitle, { color: theme.colors.text }]}>
          It looks like you're offline
        </Text>
        <Text style={[styles.offlineText, { color: theme.colors.secondaryText }]}>
          Check your connection and try again.
        </Text>
        <TouchableOpacity
          style={[styles.retryButton, { backgroundColor: theme.colors.primary }]}
          onPress={() => console.log('Retry pressed')}
        >
          <Text style={styles.retryButtonText}>Try again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  newListButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  newListText: {
    fontSize: 16,
    fontWeight: '600',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    paddingBottom: 12,
  },
  tabText: {
    fontSize: 15,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  offlineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  offlineText: {
    fontSize: 15,
    marginBottom: 16,
    textAlign: 'center',
  },
  retryButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default LibraryScreen;