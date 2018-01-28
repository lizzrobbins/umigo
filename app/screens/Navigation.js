import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Navigator, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MainPage from './MainPage.js';
import Connections from './Connections'


// const MainPages = StackNavigator({
//   MainPage: {
//     screen: MainPage,
//     path: '/',
//   },
//   Connections: {
//     screen: Connections,
//     path: '/location/:name',
//   },
// });


const Navigation = TabNavigator({
  // MainPage: {
  //   screen: MainPage,
  //   navigationOptions: {
  //     tabBarLabel: 'Main'
  //   }
  // },
  // Connections: {
  //   screen: Connections,
  //   navigationOptions: {
  //     tabBarLabel: 'Connections'
  //   }
  // }

})


export default Navigation
