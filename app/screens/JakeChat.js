import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Navigator, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Button, Header, List, ListItem, FormInput } from 'react-native-elements'

export default class JakeChat extends React.Component {

  render() {
    return (
      <View>
        <ScrollView>
          <Header
            style={styles.header}
            backgroundColor='white'
            leftComponent={{ icon: 'arrow-back', color: '#483954',
            onPress: this.props.gotoConnections.bind(this),
            }}
            // centerComponent={{ text: 'UmiGo', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
            // onPress: this.props.gotoMainPage.bind(this),
            // }}
            rightComponent={{ icon: 'more-vert', color: '#483954', }}
            outerContainerStyles={{ borderBottomColor: 'white', borderBottomWidth: 0, }}
          />

          <View>
            <TextInput
            style={styles.textInput}
            numberOfLines={4}/>
          </View>

        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textInput: {
    color: 'black',
    fontWeight: 'bold',
    // alignSelf: ''
    width: 315,
    height: 100,
    borderColor: 'darkgray',
    borderWidth: 1.5,
    marginLeft: 30,
  }
});
