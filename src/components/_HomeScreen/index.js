import React, { Component } from "react";
import { DrawerNavigator, StackNavigator, TabNavigator } from "react-navigation";
//component
import HomeScreen from "./HomeScreen"
//tab screnn
import MainScreenNavigator from "../_TabScreen"
//sidebar 
import SideBar from "../_SideBarScreen/SideBar"
//profiles
import  Profiles  from "../_LeftScreen";
//login router
//user
import UserRouter from "../_UserNav"
//menu stack
//import from card in tabScreens
import MainMenuNavMaster from '../_MainMenuNavMaster'
import MainMenuNavReport from '../_MainMenuNavReport'
// import CekPulsa from '../menu'
const Navigation = StackNavigator(
  {   
    Home: { screen: MainScreenNavigator},
    Biodata: { screen: UserRouter },
    MainMaster : { screen : MainMenuNavMaster },///free key user name
    MainReport : { screen : MainMenuNavReport },
  },
  {
    headerMode:'none',
    mode: 'modal',
  }
);
//home router 
  const HomeScreenRouter = DrawerNavigator(
    {
      Home: { screen: MainScreenNavigator }, 
      MainMenuNavMaster : { screen : Navigation }, //key link send props < navigation/>
      MainMenuNavReport : { screen : Navigation },
    },
    {
      contentComponent: props => <SideBar {...props} />,
      drawerWidth: 290
    }
  );
export default HomeScreenRouter;