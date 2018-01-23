import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <TextInput
          style={styles.loginInput}
          placeholder='username'/>
        <TextInput
          style={styles.loginInput}
          placeholder='password'/> */}
        <FormLabel>Username</FormLabel>
        <FormInput
          // onChangeText={someFunction}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          // onChangeText={someFunction}
        />
        {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
        <Button
          raised
          // onPress={enterHere}
          title='LOGIN'
          backgroundColor='#70BF53'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  // loginInput: {
  //   width: 250,
  //   height: 40,
  //   fontSize: 18,
  //   borderWidth: 1,
  //   color: '#483954',
  //   borderColor: '#483954',
  //   borderRadius: 10,
  //   marginBottom: 10,
  // },
});
