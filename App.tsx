import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import BookmarksScreen from './src/screens/BookmarkScreen';
import ForYouScreen from './src/screens/ForYouScreen';
import FollowingScreen from './src/screens/FollowingScreen';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { View, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const NotificationIcon = () => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity style={{ marginRight: theme.spacing.md }}>
      <Icon name="notifications-none" size={24} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => {
              const { theme } = useTheme();
              return {
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = 'home';
                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outlined';
                  } else if (route.name === 'Search') {
                    iconName = focused ? 'search' : 'search';
                  } else if (route.name === 'Bookmarks') {
                    iconName = focused ? 'bookmark' : 'bookmark-border';
                  } else if (route.name === 'Following') {
                    iconName = focused ? 'people' : 'people-outline';
                  }
                  return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.textSecondary,
                tabBarStyle: {
                  backgroundColor: theme.colors.surface,
                  borderTopWidth: 1,
                  borderTopColor: theme.colors.border,
                  height: Platform.OS === 'ios' ? 88 : 60,
                  paddingBottom: Platform.OS === 'ios' ? 28 : 8,
                  paddingTop: 8,
                  elevation: 0,
                  shadowOpacity: 0,
                },
                headerStyle: {
                  backgroundColor: theme.colors.surface,
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors.border,
                },
                headerTitleStyle: {
                  ...theme.typography.h2,
                  color: theme.colors.text,
                },
                headerRight: () => <NotificationIcon />,
              };
            }}
          >
            <Tab.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                title: 'For You',
              }}
            />
            <Tab.Screen 
              name="Search" 
              component={SearchScreen}
              options={{
                title: 'Discover',
              }}
            />
            <Tab.Screen 
              name="Bookmarks" 
              component={BookmarksScreen}
              options={{
                title: 'Saved',
              }}
            />
            <Tab.Screen 
              name="Following" 
              component={FollowingScreen}
              options={{
                title: 'Following',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
