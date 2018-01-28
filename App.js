import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Navigator } from 'react-native';
import Login from './app/screens/Login.js';
import MainPage from './app/screens/MainPage.js';
// import Navigation from './app/screens/Navigation.js';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loginScreen: true,
      activateMainPage: false,
      activateConnections: false,
      connection: []
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://umigo-react-native.herokuapp.com/people/people/1`)
    const json = await response.json()
      this.setState({connection: json})
  }

  gotoMainPage = () => {
    this.setState({activateMainPage: true, loginScreen: false, activateConnections: false})
  }

  gotToConnections = () => {
    this.setState({activateMainPage: false, loginScreen: false, activateConnections: true})
  }

    getFirstName() {
      switch (this.state.connection) {
        case [] :
        return
        default :
        let data = this.state.connection
        for(let person of data) {
          if(person.id == 1) {
            singlePerson = person
          }
        }

        return singlePerson
      }
    }

  render() {
    return (
      <View style={styles.container}>

        {this.state.loginScreen ? <Login gotoMainPage={this.gotoMainPage} /> : null}

        {this.state.activateMainPage ? <MainPage getPerson={this.getFirstName} gotToConnections={this.gotToConnections} /> : null}
        {/* <Navigation /> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
