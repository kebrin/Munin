import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MapScreen from '../screens/MapScreen';
import UserScreen from '../screens/UserScreen';
import HighscoreScreen from '../screens/HighscoreScreen';
import QuizScreen from "../screens/QuizScreen";
import EndScreen from "../screens/EndScreen";


// Home screen -> Map
const HomeStack = createStackNavigator({
  Home: MapScreen,
  Quiz: QuizScreen,
  End: EndScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Kart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-map'} />
  ),
};


// User screen -> profile/info
const UserStack = createStackNavigator({
  User: UserScreen,
});

UserStack.navigationOptions = {
  tabBarLabel: 'Bruker',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-person'} />
  ),
};

// Highscore -> list
const HighscoreStack = createStackNavigator({
  Highscore: HighscoreScreen,
});

HighscoreStack.navigationOptions = {
  tabBarLabel: 'Toppscore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-podium'} />
  ),
};

export default createBottomTabNavigator({
  UserStack,
  HomeStack,
  HighscoreStack,
});
