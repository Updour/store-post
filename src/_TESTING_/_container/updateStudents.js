import React, { Component } from 'react';
import { ToastAndroid, Alert } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class UpdateStudents extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      TextInput_Student_ID: '',
      TextInput_Student_Name: '',
      TextInput_Student_Class: '',
      TextInput_Student_PhoneNumber: '',
      TextInput_Student_Email: '',
    };
  }
  //
   componentDidMount(){

      // Received Student Details Sent From Previous Activity and Set Into State.
      this.setState({ 
        TextInput_Student_ID : this.props.navigation.state.params.ID,
        TextInput_Student_Name: this.props.navigation.state.params.NAME,
        TextInput_Student_Class: this.props.navigation.state.params.CLASS,
        TextInput_Student_PhoneNumber: this.props.navigation.state.params.PHONE_NUMBER,
        TextInput_Student_Email: this.props.navigation.state.params.EMAIL,
      })

     }
   UpdateStudentRecord = () =>{
      
            fetch('https://reactnativecode.000webhostapp.com/Student/UpdateStudentRecord.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
      
              student_id : this.state.TextInput_Student_ID,

              student_name : this.state.TextInput_Student_Name,
      
              student_class : this.state.TextInput_Student_Class,
      
              student_phone_number : this.state.TextInput_Student_PhoneNumber,
      
              student_email: this.state.TextInput_Student_Email
      
            })
      
            }).then((response) => response.json())
                .then((responseJson) => {
      
                  // Showing response message coming from server updating records.
                  Alert.alert(responseJson);
      
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
              <Label>Username</Label>
              <Input 
               value={this.state.TextInput_Student_Name}
                 onChangeText={ TextInputValue => this.setState({ TextInput_Student_Name : TextInputValue }) }
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input 
                 onChangeText={ TextInputValue => this.setState({ TextInput_Student_Class : TextInputValue }) }
                 value = { this.state.TextInput_Student_Class }
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input 
                 onChangeText={ TextInputValue => this.setState({ TextInput_Student_PhoneNumber : TextInputValue }) }
                  value = { this.state.TextInput_Student_PhoneNumber }                
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input 
                 onChangeText={ TextInputValue => this.setState({ TextInput_Student_Email : TextInputValue }) }
                  value = { this.state.TextInput_Student_Email }
              />
            </Item>
          </Form>
          <Button full onPress = {() => this.UpdateStudentRecord()} >
            <Text></Text>
          </Button>
        </Content>
      </Container>
    );
  }
}