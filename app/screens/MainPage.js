import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Navigator, ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, Header } from 'react-native-elements'
import { StackNavigator, TabNavigator } from 'react-navigation';
// import Navigation from './Navigation'
import Connections from './Connections'

export default class MainPage extends React.Component {
  constructor(props) {
      super(props)
    }

  render() {
    console.log(this.props.getPerson);
    return (
      <View>
        {/* <Navigation props={this.state} /> */}
        <Header
          style={styles.header}
          backgroundColor='#483954'
          leftComponent={{ icon: 'settings', color: '#fff' }}
          centerComponent={{ text: 'UmiGo', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
          rightComponent={{ icon: 'people', color: '#fff',
          onPress: () => this.gotToConnections,
          }}
        />
        <View>
          <ScrollView>
            <Image
              style={styles.image}
              source={require('../../images/puccio1.png')}></Image>
            {/* <Text key={this.props.getPerson.id} style={styles.user}>
              {this.props.getPerson.id}
            </Text>
            <Text key={2} style={styles.user}>
              {this.props.getPerson.first_name}
            </Text> */}
            <Text style={styles.name}>Alex, 28</Text>
            <Text styles={styles.location}>Boulder, CO</Text>
            <Text styles={styles.bio}>This is her bio.</Text>
            <Text styles={styles.interestHeading}>Interests:</Text>
            <Text styles={styles.interests}>Rock climbing</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // user: {
  //   backgroundColor: 'pink',
  // },
  image: {
    alignSelf: 'center',
    height: 400,
    width: 400,
  },
});
