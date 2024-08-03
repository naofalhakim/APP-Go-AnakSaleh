import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile';
import MateriScreen from '../Materi';
import GamesScreen from '../GamesScreen';
import COLOR from '../../utils/ColorSystem';
import { SCREEN_NAME } from '../../utils/Enum';
import ICON from '../../assets/icons';

const Tab = createBottomTabNavigator();

class MainMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator initialRouteName={SCREEN_NAME.MATERI}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === SCREEN_NAME.PROFILE) {
              return <Image tintColor={color} source={ICON.icon_profile_menu} />;
            } else if (route.name === SCREEN_NAME.GAMES) {
              return <Image tintColor={color} source={ICON.icon_games_menu} />;
            } else {
              return <Image tintColor={color} source={ICON.icon_desc_menu} />;
            }
          },
          tabBarActiveTintColor: COLOR.BLUE_PRIMER,
          tabBarInactiveTintColor: 'gray',
          orientation: 'portrait',
          headerShown: false,
          tabBarStyle:{
            backgroundColor: COLOR.BLUE_WHALE,
          }
        })}
        sceneContainerStyle={{
          backgroundColor: COLOR.WHITE,
        }}
      >
        <Tab.Screen name={SCREEN_NAME.MATERI} component={MateriScreen} />
        <Tab.Screen name={SCREEN_NAME.GAMES} component={GamesScreen} />
        <Tab.Screen name={SCREEN_NAME.PROFILE} component={Profile} />
      </Tab.Navigator>
    )

  }
}

export default MainMenu;
