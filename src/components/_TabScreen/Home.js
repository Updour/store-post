import React from "react";
import { AppRegistry, View, StatusBar, Alert } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Button, Text  } 
from "native-base";
//styling
import styles from './styles';
//component menu  import
// import MainPulsa from '../_MainMenuNav/MainPulsa'
// import MainPaketData from '../_MainMenuNav/MainPaketData'
// import MainPln from '../_MainMenuNav/MainPln'
//notif
import OfflineNotice from '../_notifications/OfflineNotice'
import { home } from '../_TollbArScreen'
import MainMenuIndex from "../_MainMenuNavHome/MainMenuIndex";

export default class Home  extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      active: 'true'
    };
  }
  render() {
     const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <Container>
        <Header style ={styles.headerPage}>
         <StatusBar
           backgroundColor="#0000cc"
           barStyle="light-content"
         />
          <Left>
            <Button
              transparent
              onPress={() => navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body  >
            <Title style ={styles.titles}>{home}</Title>
          </Body>
          <Right />
        </Header>
        <OfflineNotice/>
        <Content style={styles.content}>
          <MainMenuIndex />
      </Content>

      </Container>
    );
  }
}
