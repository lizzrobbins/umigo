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
        <ScrollView>
        {/* <Navigation props={this.state} /> */}
          <Header
            style={styles.header}
            backgroundColor='#483954'
            leftComponent={{ icon: 'settings', color: '#fff' }}
            centerComponent={{ text: 'UmiGo', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
            rightComponent={{ icon: 'people', color: '#fff',
            onPress: this.props.gotoConnections.bind(this),
            }}
          />

          <View>
            <Image
              style={styles.image}
              source={require('../../images/puccio1.png')} />
            {/* <Text key={this.props.getPerson.id} style={styles.user}>
              {this.props.getPerson.id}
            </Text>
            <Text key={2} style={styles.user}>
              {this.props.getPerson.first_name}
            </Text> */}
            <View style={styles.userInfo}>
              <Text style={styles.name}>Alex, 28</Text>
              <Text style={styles.location}>Boulder, CO</Text>
            </View>
            <View style={styles.userBio}>
              <Text style={styles.bio}>Hey all! I am a professional rock climber. While I love all styles of climbing, I have a particular affinity for bouldering. I started climbing when I was 13, and I began competing nationally when I was 17.

              My favorite places to climb are Rocky Mountain National Park and Hueco Tanks! I'm looking to hike and climb with some awesome people - let's spot each other!</Text>
            </View>
            <View style={styles.userInterests}>
              <Text style={styles.interestHeading}>Interests:</Text>
              <Text style={styles.interests}>Rock climbing</Text>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: 400,
    width: 400,
  },
  userInfo: {
    borderBottomColor: 'darkgray',
    borderBottomWidth: .5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  name: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#393939',
  },
  location: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    paddingLeft: 10,
    color: '#393939',
  },
  userBio: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  bio: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    // fontWeight: 'bold',
    paddingLeft: 10,
    color: '#393939',
  },
  // userInterests: {
  //   borderColor: 'darkgray',
  //   borderWidth: .5,
  //   borderRadius: 20,
  // },
  interestHeading: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#393939',
  },
  interests: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#393939',
  }
});
