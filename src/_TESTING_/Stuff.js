import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Alert } from  'react-native'
import { 
  Container, Header, Content, Form, Item, Input, Label, Text,
  List, ListItem, Left, Thumbnail, Body, Right  
} from 'native-base';

export default class Stuffs extends Component {
  constructor(props) {
    super(props); 
  
    this.state = {
      data : [],
      TextInput_Student_ID : ''
    };
  }

  componentDidMount(){

      // // Received Student Details Sent From Previous Activity and Set Into State.
      // this.setState({ 
      //   TextInput_Student_ID : this.props.navigation.state.params.ID,
      //   TextInput_Student_Name: this.props.navigation.state.params.NAME,
      //   TextInput_Student_Class: this.props.navigation.state.params.CLASS,
      //   TextInput_Student_PhoneNumber: this.props.navigation.state.params.PHONE_NUMBER,
      //   TextInput_Student_Email: this.props.navigation.state.params.EMAIL,
      // })
    this._onGetdAtAStuff()
  }

  _onGetdAtAStuff () {
    let url = 'https://reactnativecode.000webhostapp.com/Student/ShowAllStudentsList.php'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data : responseJson
      })
      // console.warn(responseJson)
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  //delete
      DeleteStudentRecord = () =>{
        
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

          this.props.navigation.navigate('First');

      }

      GetStudentIDFunction=(student_id,student_name, student_class, student_phone_number, student_email)=>{

          this.props.navigation.navigate('UpdateStudents', { 
            ID : student_id,
            NAME : student_name,
            CLASS : student_class,
            PHONE_NUMBER : student_phone_number,
            EMAIL : student_email

          });

     }

  _keyExtractor = (item, i) => i.toString()
  _renderItem = ({item, key, }, props) => {
    let { student_name, student_class } = item
    return(
      <List>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tpFYE_0UBWqPwXbhfIzVEewCGaLSzw_M4f_DKLZ1yS4vqzN-' }} />
        </Left>
        <Body>
          <Text>{student_name}</Text>
          <Text note>{student_class}</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress = {
              this.GetStudentIDFunction.bind(
                        this, item.student_id,
                         item.student_name, 
                         item.student_class, 
                         item.student_phone_number, 
                         item.student_email
                         )} 
            > 
            <Text note>update</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {this.DeleteStudentRecord} >
            <Text note>delete</Text>
          </TouchableOpacity>
        </Right>
      </ListItem>
</List>
    )
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Content>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('InsertStudent')} >
              <Text> add </Text>
            </TouchableOpacity>
          </Content>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </Content>
      </Container>
    );
  }
}