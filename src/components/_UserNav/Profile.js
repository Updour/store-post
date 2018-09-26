/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, StatusBar, Image } from 'react-native';
import { 
  Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text, 
  Form, Item, Input, Label,Footer, List, ListItem
} from "native-base";

import styles from './styles';

export default class Profile extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
       <Container>
        <Header style={styles.header}>
         <StatusBar
           backgroundColor="#0000cc"
           barStyle="light-content"
         />
          <Left>
            <Button
              transparent 
              onPress={() => navigate('DrawerOpen')}>
              <Icon name="menu"  style ={{color: 'white'}} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title} >ESYS PROFILE</Title>
          </Body>
          <Right />   
      </Header>
         <Content padder>
           <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
             
            </CardItem>
          </Card>

            <List>
            <ListItem icon>
              <Left>
                <Icon name="ios-person-outline" />
              </Left>
              <Body>
                <Text>Username </Text>
              </Body>
              <Right/>
            </ListItem>
            <List>
              <ListItem icon>
                <Left>
                  <Icon name="ios-phone-portrait-outline" />
                </Left>
                <Body>
                  <Text>No Handphone</Text>
                </Body>
              </ListItem>
            </List>
            <ListItem icon>
              <Left>
                <Icon name="ios-navigate-outline" />
              </Left>
              <Body>
                <Text>Home Address</Text>
              </Body>
              <Right/>
            </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-mail-outline"/>
                </Left>
                <Body>
                  <Text>User Email</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-log-out-outline"/>
                </Left>
                <Body>
                  <Text>Log Out</Text>
                </Body>
              </ListItem>
            </List>

        </Content>
      </Container>
    );
  }
}
