'use strict';

import React, { Component } from 'react';

import { StyleSheet, FlatList,  TouchableOpacity} from 'react-native';
import { Container, Header, Content, Text, List, ListItem, Left, Thumbnail, Body, Right} from 'native-base'


export default class GetMerChandises extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	users : ''
	  };
	}
	//early calling
	componentDidMount(){
		this._ongEtUsersdAtA()
		// this._ongetIdUsersData()
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
	              <TouchableOpacity onPress= {() =>alert(_id)} >
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

	constructor(props) {
		super(props);

		this.state = {
			students : [],
			TextInput_Student_ID : ''
		};
	}
	//early in the call
	componentDidMount() {
		this._OnGetDataStudents()
	}
	//get All student
	_OnGetDataStudents() {
		let url = 'https://reactnativecode.000webhostapp.com/Student/ShowAllStudentsList.php'
		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					students : responseJson
				})
				console.warn(responseJson)
			})
			.catch((err) => {
				console.warn(err)
			})
	}
	//delete ID student
	_OnDeleteDataStundents = () => {
		fetch('https://reactnativecode.000webhostapp.com/Student/DeleteStudentRecord.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        
            student_id : this.state.TextInput_Student_ID
        
          })
        
          }).then((response) => response.json())
          .then((responseJson) => {
        
            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
        
          }).catch((error) => {
             console.error(error);
          });
	}
	//function from get id into update 
	_onGetUpdAteFunctions = (student_id, student_name, student_class, student_phone_number, student_email) => 
	{
		this.props.navigation.navigate('UpdateMerchandises', {
			ID : student_id,
            NAME : student_name,
            CLASS : student_class,
            PHONE_NUMBER : student_phone_number,
            EMAIL : student_email
		})
	}
	//for render
	_keyExractor = ( item, i ) => i.toString()
	_renderItem = ({ item, key }) => {
		let { student_name, student_email } = item
		return (
			<List>
				<ListItem avatar>
				 <Left>
				 	<Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tpFYE_0UBWqPwXbhfIzVEewCGaLSzw_M4f_DKLZ1yS4vqzN-' }} />
				 </Left>
					<Body>
						<Text key = 'key'>{ student_name }</Text>
						<Text>{ student_email }</Text>
					</Body>
					<Right>
					<TouchableOpacity onPress = { this._onGetUpdAteFunctions.bind(this,
						item.student_id,
						item.student_name,
						item.student_class,
						item.student_phone_number,
						item.student_email
						)} 
					>
						<Text note>update</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress = { this._OnDeleteDataStundents.bind(this) }>
						<Text note>delete</Text>
					</TouchableOpacity>
						
					</Right>
				</ListItem>
			</List>
		)
	}

	render(){
		return(
			<Container>
				<Header/>
				<Content>
				<Text>add</Text>
					<FlatList 
						data = { this.state.students }
						renderItem = { this._renderItem }
						keyExtractor = { this._keyExractor }
					/>
				</Content>
			</Container>
		)
	}
}