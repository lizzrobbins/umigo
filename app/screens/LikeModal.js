import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const LikeModal = () => (
    <View flex={1} style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, backgroundColor: 'pink' }}>
      <Text>Error Modal</Text>
      <Text>Slides up from the bottom, and covers the entire screen with no transparency</Text>
      <Button title="Close" onPress={Actions.pop} />
    </View>

);

const styles = StyleSheet.create({

});


export default LikeModal;
