import React, { Component } from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import styles from './styles';

import { reports } from '../_TollbArScreen'

import MainMenuUpReport from '../_MainMenuNavReport/MainMenuUp'
import MainMenuMiddleReport from '../_MainMenuNavReport/MainMenuMiddle'

export default class Reports extends Component {
  render() {
    const { navigation } = this.props;
   const { navigate } = navigation;
    return (
      <Container>
        <Header style ={styles.headerPage} >
            <StatusBar
                backgroundColor="#0000cc"
                barStyle="light-content"
            />
      <Left>
        <Button transparent onPress={() => navigate('DrawerOpen')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title style={styles.titles} >{reports}</Title>
      </Body>
      <Right />
    </Header>
        <Content style={styles.content}>
         <MainMenuUpReport navigation = { navigation } />
         <MainMenuMiddleReport navigation = { navigation } />
        </Content>
      </Container>
    );
  }
}
