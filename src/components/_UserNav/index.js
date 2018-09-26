import React, { Component } from 'react';
import { TabNavigator,  } from "react-navigation";
import { Icon } from 'native-base'
import Biodata from './Biodata';
import Profile from './Profile';

const UserRouter  = TabNavigator({ 
  Profile: { screen: Profile},
  Biodata: { screen: Biodata},
},
 
  {  
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled : true,
      tabBarOptions:{
        activeTintColor: 'blue',
        activeBackgroundColor: "gray",
        inactiveTintColor: 'red',    
          labelStyle: {
            fontSize: 15,
          },
            style: {
              backgroundColor: '#ccc',
            },
      }
  }
);

export default UserRouter;