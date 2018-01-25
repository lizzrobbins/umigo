import React from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, FormLabel, FormInput, Header } from 'react-native-elements'

export default class Login extends React.Component {
  constructor(props) {
      super(props)
    }

  render() {
    return (
      <View>
        <Header
          backgroundColor='#483954'
          leftComponent={{ icon: 'settings', color: '#fff' }}
          centerComponent={{ text: 'UmiGo', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
          rightComponent={{ icon: 'people', color: '#fff'}}
        />
        <Text>Hello, MainPage!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {

  }
});
