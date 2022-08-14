import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            
            headerShown:false
            
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
    );
    
    const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
      headerShown:false
        }}>
            <DetailsStack.Screen name="Details" component={DetailsScreen} />
    </DetailsStack.Navigator>
    );

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffcc00"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={'#ffcc00'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={'#ffcc00'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={'#ffcc00'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={'#ffcc00'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;


  