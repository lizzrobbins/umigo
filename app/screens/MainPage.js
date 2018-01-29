import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Navigator, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Button, FormLabel, FormInput, Header, Icon } from 'react-native-elements'
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
      <View style={styles.wholePage}>
        <ScrollView>
          <Header
            backgroundColor='white'
            leftComponent={{ icon: 'settings', color: '#483954' }}
            centerComponent={{ text: 'UmiGo', style: { color: '#483954', fontWeight: 'bold', fontSize: 20 } }}
            rightComponent={{ icon: 'people', color: '#483954',
            onPress: this.props.gotoConnections.bind(this),
            }}
            outerContainerStyles={{ borderBottomColor: 'white', borderBottomWidth: 0, }}
          />

          <View>
            <ImageBackground
              style={styles.imageBackground}
              source={require('../../images/puccio1.png')}
              blurRadius={20}>
              <Image
                style={styles.image}
                source={require('../../images/puccio1.png')} />
            </ImageBackground>
            <View style={styles.userHeading}>
              <View style={styles.userInfo}>
                <Text style={styles.name}>Alex, 28</Text>
                <Text style={styles.location}>Boulder, CO</Text>
              </View>
              <View style={styles.likeButtons}>
                <TouchableOpacity
                  underlayColor='pink'
                  style={styles.likeUserButton}
                  onPress={()=>alert('hi')}>
                  <Icon name={'check'}  size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeUserButton}>
                  <Icon name={'close'}  size={30} color="white" />
                </TouchableOpacity>
              </View>
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
  wholePage: {
    backgroundColor: 'white',
  },
  imageBackground: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 400,
    width: 400,
  },
  image: {
    alignSelf: 'center',
    height: 330,
    width: 330,
  },
  userHeading: {
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: .5,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    color: '#393939',
  },
  location: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#393939',
  },
  likeButtons: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  likeUserButton: {
    borderWidth: 1,
    borderColor: '#70BF53',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#70BF53',
    borderRadius: 50,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  userBio: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  bio: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    // fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    color: '#393939',
  },
  userInterests: {
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderTopWidth: .5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  interestHeading: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    color: '#393939',
  },
  interests: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 15,
    color: '#393939',
  }
});
