'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Header, Content, Text, Form, Item, Label, Input, Button } from 'native-base'

export default class InsertMerchandises extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	firstNameUsers : '',
    	lastNameUsers: '',
    };
  }
  //insert data record into users
  _onDataInsertUsers = () => {
  	let url = 'http://192.168.9.2:3000/users'
  	fetch(url,{
  		method : 'POST',
  		headers : {
  			'Accept': 'application/json',
  			'Content-Type': 'application/json',
  		},
  		body : JSON.stringify({
  			firstName : this.state.firstNameUsers,
  			lastName : this.state.lastNameUsers,
  		})
  	})
  	.then(response => response.json())
  	.then(responseJson => {
  		console.warn(responseJson)
  	})
  	.catch(err => {
  		console.error(err)
  	})
  }
  render() {
    return (
      <Container>
      	<Header />
      	<Content>
      		<Form>
            <Item fixedLabel>
              <Label>nama depan</Label>
              <Input 
                 onChangeText={ firstNameUsers => this.setState({firstNameUsers}) }
                 />
            </Item>
            <Item fixedLabel last>
              <Label>nama belakang</Label>
              <Input 
                 onChangeText={ lastNameUsers => this.setState({lastNameUsers}) }
              />
            </Item>
          </Form>
          <Button full onPress = {() => this._onDataInsertUsers()} >
            <Text></Text>
          </Button>
      	</Content>
      </Container>
    );
  }
}
