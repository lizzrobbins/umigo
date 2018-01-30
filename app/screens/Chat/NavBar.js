import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import NavBar, { NavTitle, NavButton, NavGroup } from 'react-native-nav';

export default class NavBarCustom extends React.Component {
  render() {
    return (
      <NavBar style={styles}>
        <NavButton
          onPress={() => this.props.gotoConnections.bind(this)}
          >
          <Image style={styles.backArrow}
            resizeMode={"contain"}
            source={require('./assets/left-arrow.png')}
          />
        </NavButton>
        <NavTitle style={styles.title}>
          <Text style={styles.name}>Jake</Text>
        </NavTitle>
        <NavButton style={styles.navButton}>
          <Image style={styles.image}
            resizeMode={"contain"}
            source={require('../../../images/jake1.jpg')}
          />
        </NavButton>
      </NavBar>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#fff',
  },
  navBar: {
    backgroundColor: '#fff',
  },
  navGroup: {
    alignItems: 'center',
  },
  backArrow: {
    width: 25,
    height: 25,
  },
  title: {
    justifyContent: 'space-around'
  },
  buttonText: {
    color: 'rgba(231, 37, 156, 0.5)',
  },
  navButton: {
    flex: 1,
  },
  name: {
    color: '#483954',
    fontWeight: 'bold',
    fontSize: 18
  },
  image: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
})
