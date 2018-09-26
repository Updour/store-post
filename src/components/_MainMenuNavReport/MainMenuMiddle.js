/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity, Image } from 'react-native';
import { Content, Card, Text } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';

import styles from './styles'; 


export default class MainMenuMiddleReport extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
          <Grid style={styles.grid}>
            <Col style={styles.col}>
              <Content>
              <TouchableOpacity onPress = {() => navigate('ReturnCustomers')} >
                  <Card style= {{borderRadius: 15}} >
                    <Image source={require('../../assets/images/report/returnCustomer.png')}
                      style={styles.styleImage}
                    />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Return Pelanggan</Text>
                      </Content>
                    </Card>
                  </TouchableOpacity>
              </Content>
            </Col>
            <Col style={styles.col}>
              <Content>
              <TouchableOpacity onPress = {() => navigate("ReturnSuppliers")} >
                  <Card style= {{borderRadius: 15}} >
                    <Image source={require('../../assets/images/report/returnSupplier.png')}
                      style={styles.styleImage}
                    />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Return Pemasok</Text>
                      </Content>
                  </Card>
                </TouchableOpacity>
              </Content>
            </Col>
          </Grid>
             
    );
  }
}


