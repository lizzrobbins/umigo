import React from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../logo-green.png')}
        />
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 257,
    height: 250,
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
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
