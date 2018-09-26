import React, { Component } from 'react';
import { ToastAndroid, Alert } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class UpdateMerchandises extends Component {
	constructor(props) {
		super(props);

		this.state = {
			usersId: '',
			firstNameUsers: '',
			lastNameUsers: ''
		};
	}

	componentDidMount() {
		this.setState({
		  usersId : this.props.navigation.state.params.idUsers,
      firstNameUsers : this.props.navigation.state.params.first,
      lastNameUsers: this.props.navigation.state.params.last,
   })
    console.warn(this.props.navigation.state.params.idUsers,)
	}
	//update 
	_onUpdateMerchandise = (_id) => {
    // `http://192.168.9.2:5000/contact/person/${this.props.navigation.state.params.id}`
    let url = `http://192.168.9.2:3000/users/${this.props.navigation.state.params.idUsers}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({      
        _id : this.state.usersId,
        firstName : this.state.firstNameUsers,
        lastName : this.state.lastNameUsers    
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
                  // Showing response message coming from server updating records.
                  console.warn(responseJson);
                }).catch((error) => {
                 console.error(error);
               });
              }
	render() {
		return (
			<Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>FIRST NAME</Label>
              <Input 
               value={this.state.firstNameUsers}
                onChangeText={(firstNameUsers) => this.setState({firstNameUsers})}
              />
            </Item>
            <Item fixedLabel last>
              <Label>LAST NAME</Label>
              <Input 
                 value = { this.state.lastNameUsers }
                 onChangeText={(lastNameUsers) => this.setState({lastNameUsers})}
              />
            </Item>
          </Form>
          <Button full onPress = {this._onUpdateMerchandise.bind(this)} >
            <Text></Text>
          </Button>
        </Content>
      </Container>
		)
	}
}