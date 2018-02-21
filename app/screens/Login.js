import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground
} from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_data: {}
    }
  }

  getUserData() {
    let data = {
      username: this.usernameInputValue,
      password: this.passwordInputValue
    };
    axios.post('http://localhost:3000/people/login', {data: data}).then((response) => {
      this.setState({user_data: response.data[0]});
      Actions.MainPage({props: this.state})
    }).catch((err) => {
      console.log(err, 'user not logged in, try again');
    });
  }

  render() {
    return (<ImageBackground style={styles.mountainBackground} source={require('../../images/bg-mountain-01.jpg')}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../images/logo-teal.png')}/>
        <FormLabel labelStyle={{
            color: '#483954'
          }}>Username</FormLabel>
        <FormInput inputStyle={{
            color: 'black',
            fontWeight: 'bold',
            backgroundColor: 'white',
            opacity: .5,
            width: 315
          }} name="username" placeholder="username" placeholderTextColor="white" returnKeyType="next" ref={(input) => this.usernameInput = input} onChangeText={(username) => this.usernameInputValue = username} onSubmitEditing={() => this.passwordInput.focus()} keyboardType="email-address" autoCapitolize="false"/>
        <FormLabel labelStyle={{
            color: '#483954',
            fontWeight: 'bold'
          }}>Password</FormLabel>
        <FormInput inputStyle={{
            color: 'black',
            fontWeight: 'bold',
            backgroundColor: 'white',
            opacity: .5,
            width: 315,
            marginBottom: 20
          }} name="password" secureTextEntry placeholder="password" placeholderTextColor="white" returnKeyType="go" onChangeText={(password) => this.passwordInputValue = password} ref={(input) => this.passwordInput = input} autoCapitolize="false"/>
        <Button onPress={() => this.getUserData()} title='LOGIN' backgroundColor='#483954'/>
      </View>
    </ImageBackground>);
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    alignSelf: 'center',
    marginTop: 90,
    marginBottom: 50
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  mountainBackground: {
    height: 700
  }
});
