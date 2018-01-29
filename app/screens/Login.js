import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
// import Navigation from './Navigation'

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
            source={require('../../images/logo-green.png')}
          />
          <FormLabel labelStyle={{color: '#483954'}}>Username</FormLabel>
          <FormInput
            // onChangeText={someFunction}
            inputStyle={{backgroundColor: 'white', opacity: .5, width: 315}}
          />
          <FormLabel labelStyle={{color: '#483954'}}>Password</FormLabel>
          <FormInput
            // onChangeText={someFunction}
            inputStyle={{backgroundColor: 'white', opacity: .5, width: 315, marginBottom: 20}}
          />
          {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
          <Button
            raised
            onPress={this.props.gotoMainPage.bind(this)}
            title='LOGIN'
            backgroundColor='#483954'
          />
          {/* <Navigation props={this.state}/> */}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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
