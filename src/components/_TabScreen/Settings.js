import React, { Component }from "react"
import { AppRegistry, View, StatusBar } from "react-native"
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";

import styles from './styles';
import { settings } from '../_TollbArScreen'

export default class Settings extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style = { styles.headerPage } >
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
            <Title>{settings}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text> setting </Text>
        </Content>
      </Container>
    );
  }
}
