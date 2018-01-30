import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Navigator } from 'react-native';
import Login from './app/screens/Login';
import MainPage from './app/screens/MainPage';
import Connections from './app/screens/Connections';
import JakeProfile from './app/screens/JakeProfile';
import JakeChat from './app/screens/JakeChat';
import {Router, Scene} from 'react-native-router-flux';

export default class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     loginScreen: false,
  //     activateMainPage: true,
  //     activateConnections: false,
  //     activateJakeProfile: false,
  //     activateJakeChat: false,
  //     connection: []
  //   }
  // }

  // async componentDidMount(){
  //   const response = await fetch(`https://umigo-react-native.herokuapp.com/people/people/1`)
  //   const json = await response.json()
  //     this.setState({connection: json})
  // }
  //
  // gotoMainPage = () => {
  //   this.setState({activateMainPage: true, loginScreen: false, activateConnections: false, activateJakeProfile: false, activateJakeChat: false})
  // }
  //
  // gotoConnections = () => {
  //   this.setState({activateMainPage: false, loginScreen: false, activateConnections: true, activateJakeProfile: false, activateJakeChat: false})
  // }
  //
  // gotoJakeProfile = () => {
  //   this.setState({activateMainPage: false, loginScreen: false, activateConnections: false, activateJakeProfile: true, activateJakeChat: false})
  // }
  //
  // gotoJakeChat = () => {
  //   this.setState({activateMainPage: false, loginScreen: false, activateConnections: false, activateJakeProfile: false, activateJakeChat: true})
  // }
  //
  //   getFirstName() {
  //     switch (this.state.connection) {
  //       case [] :
  //       return
  //       default :
  //       let data = this.state.connection
  //       for(let person of data) {
  //         if(person.id == 1) {
  //           singlePerson = person
  //         }
  //       }
  //
  //       return singlePerson
  //     }
  //   }

  render() {
    return <Router>

        <Scene key='root'>
          <Scene hideNavBar key='Login' component={Login} />
          <Scene hideNavBar key='MainPage' component={MainPage} />
          <Scene hideNavBar key='Connections' component={Connections} />
          <Scene hideNavBar key='JakeChat' component={JakeChat} />
          <Scene hideNavBar key='JakeProfile' component={JakeProfile} />
        </Scene>
      </Router>

      {/* <View style={styles.container}>

        {this.state.loginScreen ? <Login
          gotoMainPage={this.gotoMainPage} />
          : null}

        {this.state.activateMainPage ? <MainPage
          getPerson={this.getFirstName}
          gotoConnections={this.gotoConnections} />
          : null}

        {this.state.activateConnections ? <Connections
          gotoMainPage={this.gotoMainPage}
          gotoJakeChat={this.gotoJakeChat} />
          : null}

        {this.state.activateJakeProfile ? <JakeProfile
          gotoMainPage={this.gotoMainPage}
          gotoJakeChat={this.gotoJakeChat}/>
          : null}

        {this.state.activateJakeChat ? <JakeChat
          gotoMainPage={this.gotoMainPage}
          gotoConnections={this.gotoConnections}
          gotoJakeProfile={this.gotoJakeProfile}/>
          : null}

      </View> */}

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
