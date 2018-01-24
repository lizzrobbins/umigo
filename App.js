import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Navigator } from 'react-native';
import Login from './app/screens/Login.js';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loginScreen: true,
      activateMainPage: false
    }
  }

  gotoMainPage = () => {
    this.setState({activateMainPage: true, loginScreen: false})

  }

  render() {
    return (
      <View>

        {this.state.loginScreen ? <Login gotoMainPage = {this.gotoMainPage} /> : null}

        {this.state.activateMainPage ? <MainPage /> : null}

      </View>
    )
  }
}

const styles = StyleSheet.create({

});
