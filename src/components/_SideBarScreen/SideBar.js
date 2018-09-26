/* Core */
import React, { Component } from 'react';

/* Presentational */
import { Alert, AsyncStorage, ImageBackground, ToastAndroid, Image, StatusBar, TouchableOpacity } from "react-native";
import { Container, CardItem, Right, Card, Content, Text, List, Left, ListItem, Icon, Body, Thumbnail, Button } from "native-base";
import { StackNavigator, NavigationActions } from 'react-navigation';

import styles from './styles';

export default class SideBar extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content style={{ backgroundColor: '#e6e6ff' }} >
          <Content style={{}}>
            <ImageBackground source={require('../../assets/images/sidebars.jpg')}
              style={{ alignSelf: "stretch", height: 150 }}>
              <Content style={{ marginTop: 15, alignSelf: 'flex-start' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Biodata')} >
                  <Left >
                    <Thumbnail source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png' }}
                    />
                  </Left>
                </TouchableOpacity>
                <Body>
                  <Text style={styles.textProfiles} >Updour</Text>
                  <Text note style={styles.textNumb} >082299761835</Text>
                </Body>
                <Right />
              </Content>
            </ImageBackground>
          </Content>

          <List>

            <ListItem itemDivider style={styles.styleSidebar} >
              <Text style={styles.textSidebar} >info users</Text>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Image
                  source={require('../../assets/images/home.png')}
                  style={styles.sideImage}
                />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("home")}>
                  <Text style={styles.textIcon} >home</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            {/*<ListItem avatar>
              <Left>
                <Image
                  source={require('./../../assets/images/adduser.png')}
                  style={styles.sideImage}
                />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("Agen")}>
                  <Text style={styles.textIcon}>Daftar Agen</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>*/}
            {/* info pengguna */}
            <ListItem itemDivider style={styles.styleSidebar} >
              <Text style={styles.textSidebar} >Info app</Text>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Image
                  source={require('../../assets/images/panduan.png')}
                  style={styles.sideImage}
                />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("Call")}>
                  <Text style={styles.textIcon}>panduan</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Image
                  source={require('../../assets/images/about.png')}
                  style={styles.sideImage}
                />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("About")}>
                  <Text style={styles.textIcon}>tentang</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Image
                  source={require('../../assets/images/call.png')}
                  style={styles.sideImage}
                />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("Call")}>
                  <Text style={styles.textIcon}>hubungi kamu</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>

            { /* <ListItem avatar>
                                      <Left>
                                        <Icon name="help" style={{fontSize: 20, color: 'red'}}  />
                                      </Left>
                                      <Body>
                                        <Text style={{color:'black'}}
                                        onPress={() => navigate("Auth")}>
                                        Auth</Text>
                                      </Body>
                                    </ListItem> */}
            <ListItem avatar>
              <Left>
                <Image
                  source={require('../../assets/images/logout.png')}
                  style={styles.sideImage}
                />
              </Left>
              <Body>
              <TouchableOpacity>
                <Text style={styles.textIcon}>
                  Keluar
                </Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
          </List>

        </Content>
      </Container>
    );
  }
}

