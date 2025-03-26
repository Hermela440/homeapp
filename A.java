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

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Saved') {
              iconName = 'bookmark';
            } else if (route.name === 'For You') {
              iconName = 'person';
            } else if (route.name === 'Following') {
              iconName = 'people';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Saved" component={BookmarksScreen} />
        <Tab.Screen name="For You" component={ForYouScreen} />
        <Tab.Screen name="Following" component={FollowingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;