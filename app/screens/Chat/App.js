import React, { Component } from 'react';
import { View, StyleSheet, Linking } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

import messagesData from './data';
import NavBar from './NavBar';
import CustomView from './CustomView';


const filterBotMessages = (message) => !message.system && message.user && message.user._id && message.user._id === 2;
const findStep = (step) => (_, index) => index === step - 1;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      step: 0,
    };

    this.onSend = this.onSend.bind(this);
    this.parsePatterns = this.parsePatterns.bind(this);
  }

  componentWillMount() {
    // init with only system messages
    this.setState({ messages: messagesData.filter((message) => message.system) });
  }

  onSend(messages = []) {
    const step = this.state.step + 1;
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [{ ...messages[0], sent: true, received: true }]),
      step,
    }));
    setTimeout(() => this.botSend(step), 1500 + Math.round(Math.random() * 1000));
  }

  botSend(step = 0) {
    const newMessage = messagesData
      .reverse()
      .filter(filterBotMessages)
      .find(findStep(step));
    if (newMessage) {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, newMessage),
      }));
    }
  }

  parsePatterns(linkStyle) {
    return [
      {
        pattern: /#(\w+)/,
        style: { ...linkStyle, color: 'orange' },
        onPress: () => Linking.openURL('http://localhost:3000'),
      },
    ];
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          renderCustomView={CustomView}
          user={{
            _id: 1,
          }}
          parsePatterns={this.parsePatterns}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 670,
    backgroundColor: '#333'
  },
});
