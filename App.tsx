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
import { View, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const NotificationIcon = () => (
  <TouchableOpacity style={{ marginRight: 15 }}>
    <Icon name="notifications-none" size={24} color="white" />
  </TouchableOpacity>
);

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => {
            const { theme } = useTheme();
            return {
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Search') {
                  iconName = 'search';
                } else if (route.name === 'bookmark') {
                  iconName = 'bookmark';
                } else if (route.name === 'Following') {
                  iconName = 'people';
                }
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#FFFFFF',
              tabBarInactiveTintColor: '#888888',
              tabBarStyle: {
                backgroundColor: '#121212',
                borderTopWidth: 0,
                paddingBottom: 5,
              },
              headerStyle: {
                backgroundColor: '#121212',
                shadowColor: 'transparent',
              },
              headerTitleStyle: {
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
              },
              headerRight: () => <NotificationIcon />,
            };
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="bookmark" component={BookmarksScreen} />
          <Tab.Screen name="For You" component={ForYouScreen} />
          <Tab.Screen name="Following" component={FollowingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
