import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Login from './Components/Login.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./logo-green.png')}
        />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 257,
    height: 250,
  },
  loginInput: {
    width: 250,
    height: 40,
    fontSize: 18,
    borderWidth: 1,
    color: 'black',
    borderColor: 'black',
    borderRadius: 10,
  },
});
