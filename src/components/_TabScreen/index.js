import React, { Component } from "react";
import { Image } from "react-native";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { TabNavigator,TabBarBottom } from "react-navigation";

//image focused
import masters from '.../../../src/assets/images/masters.png'
import master from '.../../../src/assets/images/master.png'
import reports from '.../../../src/assets/images/reports.png'
import report from '.../../../src/assets/images/report.png'
import users from '.../../../src/assets/images/users.png'
import user from '.../../../src/assets/images/user.png'
import settings from '.../../../src/assets/images/settings.png'
import setting from '.../../../src/assets/images/setting.png'
const backgroundColor = '#000';
//components
import styles from './styles'

import Home from './Home'
import Masters from './Masters'
import Reports from './Reports'
import Users from './Users'
import Settings from './Settings'


export default (MainScreenNavigator = TabNavigator({
  Home : {
    screen : Home,
    navigationOptions : ({ navigation }) => ({
      tabBarLabel : 'Home',
      tabBarIcon : ({tintColor, focused}) => {
        let iconName
        iconName = `ios-home${focused ? '' : '-outline' }`
        return (
          <Icon name = {iconName} color= {tintColor} />
        )},
    }), 
   },

   Masters : {
    screen : Masters,
    navigationOptions : ({ navigation }) => ({
      tabBarLabel : 'Master',
      tabBarIcon : ({ focused }) => {
        return (
          <Image source = { focused ? master : masters } 
            style={{ width: 26, height: 26, alignSelf:'center' }}
          />
       
        )},
    }),
  },
  Reports : { 
    screen : Reports,
    navigationOptions : ({ navigation }) => ({
      tabBarLabel : 'Laporan',
      tabBarIcon : ({ focused }) => {
        return (
          <Image
            source={ focused ? report : reports }
            style={{ width: 26, height: 26, alignSelf:'center' }}
          />
        )},
    }), 
  }, 
  Users : { 
    screen : Users,
    navigationOptions : ({ navigation }) => ({
      tabBarLabel : 'User',
      tabBarIcon : ({ focused }) => {
        return (
          <Image
            source={ focused ? user : users }
            style={{ width: 26, height: 26, alignSelf:'center' }}
          />
        )},
    }), 
  },
  Settings : {
    screen : Settings,
      navigationOptions : ({ navigation }) => ({
        tabBarLabel : 'Pengaturan',
        tabBarIcon : ({ focused }) => {
          return (
            <Image 
              source={ focused ? setting : settings}
              style={{ width: 26, height: 26, alignSelf:'center' }}
            />
          )
        }
      })
  }
},
 
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy:true,
     tabBarOptions: {
      showIcon:true,
      showLabel:true,
      activeTintColor: 'blue',
      inactiveTintColor: 'red',
      style: {
        backgroundColor: 'lightgray',
      },
        labelStyle: {
          fontSize: 12,
        },

    },
    animationEnabled: true,
    swipeEnabled: true,

  }
)
);

 
  