import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Navigator, ScrollView, ImageBackground } from 'react-native';
import { Button, FormLabel, FormInput, Header } from 'react-native-elements'
import { StackNavigator, TabNavigator } from 'react-navigation';
// import Navigation from './Navigation'
import Connections from './Connections'

export default class JakeProfile extends React.Component {
  constructor(props) {
      super(props)
    }

  render() {
    console.log(this.props.getPerson);
    return (
      <View>
        <ScrollView>
          <Header
            style={styles.header}
            backgroundColor='white'
            leftComponent={{ icon: 'arrow-back', color: '#483954',
            onPress: this.props.gotoJakeChat.bind(this),
            }}
            // centerComponent={{ text: 'UmiGo', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
            // onPress: this.props.gotoMainPage.bind(this),
            // }}
            rightComponent={{ icon: 'more-vert', color: '#483954', }}
            outerContainerStyles={{ borderBottomColor: 'white', borderBottomWidth: 0, }}
          />

        <View>
            <ImageBackground
              style={styles.imageBackground}
              source={require('../../images/jake1.jpg')}
              blurRadius={20}>
              <Image
                style={styles.image}
                source={require('../../images/jake1.jpg')} />
            </ImageBackground>
            <View style={styles.userHeading}>
              <View style={styles.userInfo}>
                <Text style={styles.name}>Jake, 30</Text>
                <Text style={styles.location}>Denver, CO</Text>
              </View>
            </View>
            <View style={styles.userBio}>
              <Text style={styles.bio}>Words go here!</Text>
            </View>
            <View style={styles.userInterests}>
              <Text style={styles.interestHeading}>Interests:</Text>
              <Text style={styles.interests}>Rock climbing</Text>
              <Text style={styles.interests}>Adventure riding</Text>
              <Text style={styles.interests}>Hiking</Text>
              <Text style={styles.interests}>Backpacking</Text>
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
    height: 340,
    width: 340,
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
