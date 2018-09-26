import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Alert } from  'react-native'
import { 
  Container, Header, Content, Form, Item, Input, Label, Text,
  List, ListItem, Left, Thumbnail, Body, Right  
} from 'native-base';

export default class Merchandises extends Component {
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
		// let { userId } = this.props
		let request_1_url = 'http://192.168.9.2:3000/users'
		// let request_2_url = 'http://192.168.9.2:3000/users/' + userId
			fetch(request_1_url)
			.then((response) => response.json())
			.then((responseJson)  => {
			    	console.warn(responseJson)
			    	this.setState({
			    		users: responseJson
			    	})
			    })
			// .then(()=>{
			//     	fetch(request_2_url)
			//     	.then((response) => response.json())
			//     	.then((responseJson) => {
			//     		console.warn(responseJson)
			//     	})
			//     	.catch((error) => {
			//     		// console.error(error);
			//     	});
			//     })
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
    ////function from get id into update 
	_onGetUpdAteFunctions = (_id, firstName, lastName) => {
		this.props.navigation.navigate('UpdateMerchandises', {
			idUsers : _id,
            first : firstName,
            last : lastName
		})
	}
    //for list
	_keyExtractor = (i) => i.toString()
	_renderItem = ({item, key}) => {
		let { _id, lastName, firstName } = item
		return(
			 <List>
            <ListItem avatar>
              <Left>
	              <TouchableOpacity onPress= {() =>this._oNDeleteUsers(_id)} >
	                <Thumbnail source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/clipboard-list-flat.png' }} />
	              </TouchableOpacity>
              </Left>
              <Body>
                <Text>{lastName}</Text>
                <Text note>{firstName}</Text>
                <Text note>{_id}</Text>
              </Body>
              <Right>
              <TouchableOpacity onPress={() =>this._onGetUpdAteFunctions(
              	_id, lastName,firstName)}>
                <Text note>update</Text>
               </TouchableOpacity>
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
