import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Navigator, ScrollView } from 'react-native';
import { Button, Header, List, ListItem } from 'react-native-elements'

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

          <Header
            style={styles.header}
            backgroundColor='#483954'
            leftComponent={{ icon: 'settings', color: '#fff' }}
            centerComponent={{ text: 'UmiGo', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
            onPress: this.props.gotoMainPage.bind(this),
            }}
            rightComponent={{ icon: 'people', color: '#fff',
            // onPress: this.props.gotoConnections.bind(this),
            }}
          />

        <List containerStyle={{marginBottom: 20}}>
          {this.state.connections.map((userInfo, i) =>
            <View>
              <ListItem
                roundAvatar
                avatar={require('../../images/lizz.jpg')}
                key={i}
                title={userInfo.first_name}
              />

              {/* <Image
                style={styles.image}
                source={require('../../images/lizz.jpg')}
              /> */}
              {/* <Text key={`photo1-${userInfo.id}`} style={styles.users}>{userInfo.photo1}</Text>
              <Text key={`firstName-${userInfo.id}`} style={styles.users}>{userInfo.first_name}</Text> */}
            </View>
            )}
        </List>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {

  }
});
