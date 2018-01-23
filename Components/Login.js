import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.loginInput}
          placeholder='username'/>
        <TextInput
          style={styles.loginInput}
          placeholder='password'/>
        <Button
          // onPress={enterHere}
          title="Login"
          style={styles.loginButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginIntro: {
    textAlign:'center',
    fontSize: 24,
  },
  loginInput: {
    width: 250,
    height: 40,
    fontSize: 18,
    borderWidth: 1,
    color: 'black',
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 10,
  },
  loginButton: {
    width: 150,
    height: 40,
    fontSize: 18,
    color: 'black',
    borderRadius: 10,
    marginTop: 10,
  },
});
