import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Navigator, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Button, Header, List, ListItem, FormInput } from 'react-native-elements'
import App from './Chat/App'

export default class JakeChat extends React.Component {

  render() {
    return (
      <View>
        <ScrollView>
          <App />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});
