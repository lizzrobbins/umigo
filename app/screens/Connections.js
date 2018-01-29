import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Navigator, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Button, Header, List, ListItem } from 'react-native-elements'

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
        <ScrollView>
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

          {/* <Text
            style={styles.pageTitle}>My Connections
          </Text> */}

          <List containerStyle={{marginTop: 0, marginBottom: 20, borderTopWidth: 0, borderColor: 'pink'}}>
            <TouchableOpacity onPress={this.props.gotoJakeProfile.bind(this)}>
            <View key='1'>
              <ListItem
                avatar={<Image source={require(`../../images/jake1.jpg`)}
                  style={{borderRadius:30, height:60, width:60 }} />}
                title='Jake'
                subtitle='Denver, CO'
              />
            </View>
          </TouchableOpacity>
            <View key='2'>
              <ListItem
                avatar={<Image source={require(`../../images/kyle1.jpg`)}
                  style={{borderRadius:30, height:60, width:60 }} />}
                title='Kyle'
                subtitle='Denver, CO'
              />
            </View>
            <View key='3'>
              <ListItem
                avatar={<Image source={require(`../../images/anna1.jpg`)}
                  style={{borderRadius:30, height:60, width:60 }} />}
                title='Anna'
                subtitle='Boulder, CO'
              />
            </View>
            <View key='4'>
              <ListItem
                avatar={<Image source={require(`../../images/luke1.jpg`)}
                  style={{borderRadius:30, height:60, width:60 }} />}
                title='Luke'
                subtitle='Denver, CO'
              />
            </View>
            <View key='5'>
              <ListItem
                avatar={<Image source={require(`../../images/ellen1.jpg`)}
                  style={{borderRadius:30, height:60, width:60 }} />}
                title='Ellen'
                subtitle='Lakewood, CO'
              />
            </View>
            <View key='6'>
              <ListItem
                avatar={<Image source={require(`../../images/rachelle1.jpg`)}
                  style={{borderRadius:30, height:60, width:60 }} />}
                title='Rachelle'
                subtitle='Denver, CO'
              />
            </View>
            <View key='7'>
              <ListItem
                avatar={<Image source={require(`../../images/nicole1.jpg`)}
                  style={{borderRadius:30, height:60, width:60 }} />}
                title='Nicole'
                subtitle='Denver, CO'
              />
            </View>
            <View key='8'>
              <ListItem
                avatar={<Image source={require(`../../images/meagan1.jpg`)}
                  style={{borderRadius:30, height:60, width:60 }} />}
                title='Meagan'
                subtitle='Boulder, CO'
              />
            </View>
          </List>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  pageTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
