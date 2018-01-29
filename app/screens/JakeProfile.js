import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Navigator, ScrollView } from 'react-native';
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
        {/* <Navigation props={this.state} /> */}
        <Header
          style={styles.header}
          backgroundColor='#483954'
          leftComponent={{ icon: 'arrow-back', color: '#fff',
          onPress: this.props.gotoConnections.bind(this),
          }}
          // centerComponent={{ text: 'UmiGo', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
          // onPress: this.props.gotoMainPage.bind(this),
          // }}
          rightComponent={{ icon: 'more-vert', color: '#fff',
          // onPress: this.props.gotoConnections.bind(this),
          }}

        />

        <View>
          <ScrollView>
            <Image
              style={styles.image}
              source={require('../../images/jake1.jpg')} />
            {/* <Text key={this.props.getPerson.id} style={styles.user}>
              {this.props.getPerson.id}
            </Text>
            <Text key={2} style={styles.user}>
              {this.props.getPerson.first_name}
            </Text> */}
            <Text style={styles.name}>Jake, 30</Text>
            <Text styles={styles.location}>Denver, CO</Text>
            <Text styles={styles.bio}>Words go here.</Text>
            <Text styles={styles.interestHeading}>Interests:</Text>
            <Text styles={styles.interests}>Rock climbing</Text>
            <Text styles={styles.interests}>Adventure riding</Text>
            <Text styles={styles.interests}>Hiking</Text>
            <Text styles={styles.interests}>Backpacking</Text>
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
