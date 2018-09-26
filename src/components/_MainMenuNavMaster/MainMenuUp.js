/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity,Alert, Image } from 'react-native';
import { Content, Card, Text } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';


export default class MainMenuUpMaster extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
          <Grid style={styles.grid}>
            <Col style={styles.col}>
              <Content>
                <TouchableOpacity onPress = {() => navigate("Merchandises")}>
                  <Card style= {{borderRadius: 15}} >
                    <Image source={require('../../assets/images/master/product.png')}
                      style={styles.styleImage} 
                    />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Barang</Text>
                      </Content>
                  </Card>
                </TouchableOpacity>
              </Content>
            </Col>
            <Col style={styles.col}>
              <Content>
              <TouchableOpacity onPress = {() => navigate('Categorys')} >
                  <Card style= {{borderRadius: 15}} >
                    <Image source={require('../../assets/images/master/category.jpg')}
                      style={styles.styleImage}
                    />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Kategori</Text>
                      </Content>
                    </Card>
                  </TouchableOpacity>
              </Content>
            </Col>
            <Col style={styles.col}>
              <Content>
              <TouchableOpacity onPress = {() => navigate("Units")} >
                  <Card style= {{borderRadius: 15}} >
                    <Image source={require('../../assets/images/master/unit.png')}
                      style={styles.styleImage}
                    />
                      <Content style={styles.contentIcon}>
                        <Text style= {styles.textIcon}>Satuan</Text>
                      </Content>
                  </Card>
                </TouchableOpacity>
              </Content>
            </Col>
          </Grid>
             
    );
  }
}


