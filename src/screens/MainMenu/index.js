import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile';
import MateriScreen from '../Materi';
import GamesScreen from '../GamesScreen';
import COLOR from '../../utils/ColorSystem';

const Tab = createBottomTabNavigator();

class MainMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator initialRouteName='Profile' screenOptions={{
        orientation: 'portrait',
        headerShown: false,
      }}
        sceneContainerStyle={{
          backgroundColor: COLOR.WHITE,
        }}
      >
        <Tab.Screen name="Materi" component={MateriScreen} />
        <Tab.Screen name="Games" component={GamesScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )

  }
}

export default MainMenu;
