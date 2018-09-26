/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity,Alert, Image } from 'react-native';
import { Content, Card, Text } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';

import styles from './styles';


export default class MainMenuMidlleMaster extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
          <Grid style={styles.grid}>
            <Col style={styles.col}>
              <Content>
              <TouchableOpacity onPress = {() => navigate('Suppliers')} >
                  <Card style= {{borderRadius: 15}} >
                  <Image source={require('../../assets/images/master/supplier.png')}
                    style={styles.styleImage} 
                  />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Pemasok</Text>
                      </Content>
                  </Card>
                </TouchableOpacity>
              </Content>
            </Col>
            <Col style={styles.col}>
              <Content>
                <TouchableOpacity onPress = {() => navigate('Customers')}>
                  <Card style= {{borderRadius: 15}} >
                    <Image source={require('../../assets/images/master/customer.png')}
                        style={styles.styleImage} 
                    />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Pelanggan</Text>
                      </Content>
                  </Card>
                </TouchableOpacity>
              </Content>
            </Col>
          </Grid>
             
    );
  }
}


