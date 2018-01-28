import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Navigator } from 'react-native';
import { Button, Header } from 'react-native-elements'

export default class Connections extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      connections: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://umigo-react-native.herokuapp.com/people')
    const json = await response.json()
      this.setState({connections: json})
  }

  render() {
    return (
      <View>

        <Text>Hello, Connections!</Text>

        <ScrollView>
          {this.state.connections.map(userInfo =>
              <Text key={userInfo.id} style={styles.users}>{userInfo.first_name}</Text>
            )}
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  users: {

  }
});
