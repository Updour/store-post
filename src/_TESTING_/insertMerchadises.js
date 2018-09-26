'use strict';

import React, { Component } from 'react';

import {   StyleSheet, Picker, View, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Text, Form, Item, Input, Label, Button } from 'native-base'


export default class InsertMerchadises extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	user_first	: '',
    	user_last	: '',
      language : '',
       isLoading: true,
 
   PickerValueHolder : ''
    };
  }

 componentDidMount() {
   
      return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
 
    GetPickerSelectedItemValue=()=>{
 
      Alert.alert(this.state.PickerValueHolder);
 
    }
  //inserdAtAsUsers
  _onInsertDatasUsers = () => {
  	fetch ('http://192.168.9.2:3000/users', {
  		method : 'POST',
  		headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      	firstName : this.state.user_first,
      	lastName : this.state.user_last
      })
  	}).then((response) => response.json())
  		.then((responseJson) => {
  			console.warn(responseJson)
  		}).catch(e => {
  			console.error(e)
  		})
  	}


  render() {
    return (
    	<Container>
    		<Header/>
    		<Content>
    			 <Form>
      
            <Item floatingLabel last>
              <Label>belakang</Label>
              <Input 
               onChangeText={(user_first) => this.setState({user_first})}
              />
            </Item>
            <Picker
              selectedValue={this.state.user_last}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => this.setState({user_last: itemValue})}>
              <Picker.Item label="laki" value="laki" />
              <Picker.Item label="prempuan" value="prempuan" />
            </Picker>
          </Form>
          <Button onPress={this._onInsertDatasUsers}>
          	<Text>insert</Text>
          </Button>
    		</Content>
    	</Container>
    );
  }
}

const styles = StyleSheet.create({

});
