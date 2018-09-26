import React, { Component } from 'react';
import { ToastAndroid } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class InsertStudent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      TextInput_Student_Name: '',
      TextInput_Student_Class: '',
      TextInput_Student_PhoneNumber: '',
      TextInput_Student_Email: '',
    };
  }

  //
   InsertStudentRecordsToServer = () =>{

      fetch('https://reactnativecode.000webhostapp.com/Student/InsertStudentData.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        student_name : this.state.TextInput_Student_Name,

        student_class : this.state.TextInput_Student_Class,

        student_phone_number : this.state.TextInput_Student_PhoneNumber,

        student_email: this.state.TextInput_Student_Email

      })

      })
      .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson) {
              this.props.navigation.navigate('Stuff')
              ToastAndroid.show('success', ToastAndroid.SHORT);
            }
            // Showing response message coming from server after inserting records.
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
              <Label>Username</Label>
              <Input 
                 onChangeText={ TextInputValue => this.setState({ TextInput_Student_Name : TextInputValue }) }
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input 
                 onChangeText={ TextInputValue => this.setState({ TextInput_Student_Class : TextInputValue }) }

              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input 
                 onChangeText={ TextInputValue => this.setState({ TextInput_Student_PhoneNumber : TextInputValue }) }

              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input 
                 onChangeText={ TextInputValue => this.setState({ TextInput_Student_Email : TextInputValue }) }

              />
            </Item>
          </Form>
          <Button full onPress = {() => this.InsertStudentRecordsToServer()} >
            <Text></Text>
          </Button>
        </Content>
      </Container>
    );
  }
}