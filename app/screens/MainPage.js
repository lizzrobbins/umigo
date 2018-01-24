import React from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, FormLabel, FormInput, Header } from 'react-native-elements'

export default class Login extends React.Component {

  render() {
    return (
      <View>
        <Header
          backgroundColor='#483954'
          leftComponent={{ icon: 'settings', color: '#70BF53' }}
          centerComponent={{ text: 'UmiGo', style: { color: '#70BF53' } }}
          rightComponent={{ icon: 'people', color: '#70BF53', style: 'bold' }}
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
