/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity, Image } from 'react-native';
import { Content, Card, Text } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles'; 


export default class MainMenuUpReport extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
          <Grid style={styles.grid}>
            <Col style={styles.col}>
              <Content>
                <TouchableOpacity onPress = {() => navigate("Purchases")}>
                  <Card style= {{borderRadius: 15}} >
                    <Image source={require('../../assets/images/report/purchase.png')}
                      style={styles.styleImage} 
                    />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Pembelian</Text>
                      </Content>
                  </Card>
                </TouchableOpacity>
              </Content>
            </Col>
            <Col style={styles.col}>
              <Content>
              <TouchableOpacity onPress = {() => navigate('Sales')} >
                  <Card style= {{borderRadius: 15}} >
                    <Image source={require('../../assets/images/report/sales.png')}
                      style={styles.styleImage}
                    />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Penjualan</Text>
                      </Content>
                    </Card>
                  </TouchableOpacity>
              </Content>
            </Col>
            <Col style={styles.col}>
              <Content>
              <TouchableOpacity onPress = {() => navigate("Mutations")} >
                  <Card style= {{borderRadius: 15}} >
                    <Image source={require('../../assets/images/report/mutations.png')}
                      style={styles.styleImage}
                    />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Mutasi</Text>
                      </Content>
                  </Card>
                </TouchableOpacity>
              </Content>
            </Col>
          </Grid>
             
    );
  }
}


