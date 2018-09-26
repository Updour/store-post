import React, { Component } from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";

import styles from './styles';
import { users } from '../_TollbArScreen'

export default class Users extends Component {
  render() {
    const { navigate } = this.props.navigation; 
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
        <Title style={styles.titles} >{users}</Title>
      </Body>
      <Right />
    </Header>
        <Content padder style={styles.content}>
          <Text>
            this users
          </Text>
        </Content>
      </Container>
    );
  }
}
