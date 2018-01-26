import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Navigator } from 'react-native';
import { SafeAreaView, TabNavigator } from 'react-navigation';
import Login from './Login.js';
import MainPage from './MainPage.js';

const Navigation = TabNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login'
    }
  },
  MainPage: {
    screen: MainPage,
    navigationOptions: {
      tabBarLabel: 'Main'
    }
  }
})

export default Navigation
