'use strict';

import React, { Component } from 'react';

import { StyleSheet, FlatList,  TouchableOpacity} from 'react-native';
import { Container, Header, Content, Text, List, ListItem, Left, Thumbnail, Body, Right} from 'native-base'


export default class GetMerChandises extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	users : '',
	  	userIds : ''
	  };
	}
	//early calling
	componentDidMount(){
		this._oNgetDataUsers()
		// this._ongetIdUsersData()
	}

	_oNgetDataUsers = ()=> {
		let { userId } = this.state
		let request_1_url = 'http://192.168.9.2:3000/users'
		let request_2_url = 'http://192.168.9.2:3000/users/' + userId
			fetch(request_1_url)
			.then((response) => response.json())
			.then((responseJson)  => {
			    	// console.warn(responseJson)
			    	this.setState({
			    		users: responseJson
			    	})
			    }).then(()=>{
			    	fetch(request_2_url)
			    	.then((response) => response.json())
			    	.then((responseJson) => {
			    		console.warn(responseJson)
			    	})
			    	.catch((error) => {
			    		console.error(error);
			    	});
			    })
			    .done();
	}
	//delete
	_oNDeleteUsers = (userId) =>{
		let headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		let url = 'http://192.168.9.2:3000/users/' + userId
		fetch(url, {
			method: 'DELETE',
			headers: headers,
			body: JSON.stringify({
				_id : this.state.userIds
			})
		})
		.then((response) => response.json())
		.then((responseJson) => {
            console.warn(responseJson);
        })
        .catch((error) => {
        	console.error(error);
        });

    }
	//func call All
	// _ongEtUsersdAtA = () => {
	// 	let { userId } = this.props
	// 	let url = 'http://192.168.9.2:3000/users'
	// 	let link = 'http://192.168.9.2:3000/users/' + userId
	// 	if (url) {
	// 		fetch(url)
	// 		.then(response => response.json())
	// 		.then(responseJson => {
	// 			console.warn(responseJson)
	// 		})
	// 	}
	// 	if (link) {
	// 		fetch(link)
	// 		.then(response => response.json())
	// 		.then(responseJson => {
	// 			console.warn(responseJson)
	// 		})
	// 	}
		// fetch(link)
		// .then(response => response.json())
		// .then(responseJson => {
		// 	this.setState({
		// 		users : responseJson
		// 	})
		// 	// console.warn(responseJson)
		// })
	// }
	//
	//func call objectId
	// _ongetIdUsersData (userId){
	// 	let url = 'http://192.168.9.2:3000/users/' + userId
	// 	fetch(url)
	// 	.then(response => response.json())
	// 	.then((responseJson)=>{
	// 		console.warn(responseJson)
	// 	})

	// 	// 	console.warn(response);
			 
	// 	// })
		
	// 	.catch(err => {
	// 		console.warn(err)
	// 	})
	// }

	_keyExtractor = (i) => i.toString()
	_renderItem = ({item, key}) => {
		let { _id, lastName, firstName } = item
		return(
			 <List>
            <ListItem avatar>
              <Left>
	              <TouchableOpacity onPress= {() =>this.DeleteStudentRecord(_id)} >
	                <Thumbnail source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/clipboard-list-flat.png' }} />
	              </TouchableOpacity>
              </Left>
              <Body>
                <Text>{lastName}</Text>
                <Text note>{firstName}</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            </List>
		)
	}
  render() {
    return (
      <Container>
      	<Header/>
      	<Content>
      	<FlatList
		  data = { this.state.users }
		  keyExtractor = { this._keyExtractor }
		  renderItem = { this._renderItem }
		/>
      	</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});