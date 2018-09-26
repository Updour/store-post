'use strict';

import React, { Component } from 'react';

import {
  StyleSheet, View, Picker, ActivityIndicator
} from 'react-native';
import { Container, Header, Content,Text } from 'native-base'

class ListArrPicker extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	user : [],
	  	data : '',
	  	isLoading : true

	  };
	}
	//early call
	componentDidMount() {
		this._getUsersdAtA()
	}
	//get datas
	_getUsersdAtA(){
		let url = 'http://192.168.9.2:3000/users'
		fetch(url)
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
  render() {
    return (
      <Container>
      	<Header />
      	<Content>
 <Picker
            selectedValue={this.state.user}

            onValueChange={(itemValue, itemIndex) => this.setState({user: itemValue})} >

            { this.state.dataSource.map((item, key)=>(
            <Picker.Item label={item.fruit_name} value={item.fruit_name} key={key} />)
            )}
    
          </Picker>
      	</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});


export default ListArrPicker;