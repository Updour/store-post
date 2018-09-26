import React, { Component } from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import styles from './styles';

import { master } from '../_TollbArScreen'

import MainMenuUpMaster from '../_MainMenuNavMaster/MainMenuUp'
import MainMenuMidlleMaster from '../_MainMenuNavMaster/MainMenuMiddle' 


export default class Masters extends Component {
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
        <Title style={styles.titles} >{master}</Title>
      </Body>
      <Right />
    </Header>
        <Content style={styles.content}>
         <MainMenuUpMaster navigation = { navigation } />
         <MainMenuMidlleMaster navigation = { navigation } />
        </Content>
      </Container>
    );
  }
}
