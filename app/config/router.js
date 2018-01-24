import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Me from '../screens/Me';

export const Tabs = TabNavigator ({
  Feed: {
    screen: Feed,
  },
  Me: {
    screen: Me,
  },
})
