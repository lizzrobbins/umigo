import React from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'

export default class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, MainPage!</Text>
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
  }
});
