import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Navigator } from 'react-native';
import Login from './app/screens/Login';
import MainPage from './app/screens/MainPage';
import Connections from './app/screens/Connections';
import JakeProfile from './app/screens/JakeProfile';
import JakeChat from './app/screens/JakeChat';
import LikeModal from './app/screens/LikeModal';
import {Router, Scene} from 'react-native-router-flux';

export default class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //
  //     connection: []
  //   }
  // }

  // async componentDidMount(){
  //   const response = await fetch(`https://umigo-react-native.herokuapp.com/people/people/1`)
  //   const json = await response.json()
  //     this.setState({connection: json})
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
            <Scene key='LikeModal' component={LikeModal} />
          </Scene>

      </Router>

  }
}

const styles = StyleSheet.create({

});
