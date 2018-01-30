import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
      super(props)
    }

  render() {
    return (
      <ImageBackground
        style={styles.mountainBackground}
        source={require('../../images/bg-mountain-01.jpg')}
        >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../images/logo-teal.png')}
          />
          <FormLabel labelStyle={{color: '#483954'}}>Username</FormLabel>
          <FormInput
            // onChangeText={someFunction}
            inputStyle={{color: 'black', fontWeight: 'bold', backgroundColor: 'white', opacity: .5, width: 315}}
          />
          <FormLabel labelStyle={{color: '#483954', fontWeight: 'bold'}}>Password</FormLabel>
          <FormInput
            // onChangeText={someFunction}
            inputStyle={{color: 'black', fontWeight: 'bold', backgroundColor: 'white', opacity: .5, width: 315, marginBottom: 20,}}
            secureTextEntry={true}
          />
          {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
          <Button
            raised
            onPress={() => Actions.MainPage()}
            title='LOGIN'
            backgroundColor='#483954'
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    alignSelf: 'center',
    marginTop: 90,
    marginBottom: 50,
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  mountainBackground: {
    height: 700,
  }
});
