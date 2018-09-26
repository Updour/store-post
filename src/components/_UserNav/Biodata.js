import React, { Component } from 'react';
import { View,  StatusBar} from 'react-native';
import { 
  Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text, 
  Form, Item, Input, Label, Footer, FooterTab,
} from "native-base";
import styles from './styles';



export default class Biodata extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() { 
    const { navigate } = this.props.navigation;
    const {noHp} = this.state;
  const stylenoHp = noHp ? styles.a : styles.b;
  const iconnoHp = noHp ? styles.c : styles.d;
    const {User} = this.state;
  const styleUser = User? styles.a : styles.b;
  const iconUser = User ? styles.c : styles.d;
    const {Address} = this.state;
  const styleAddress = Address ? styles.a : styles.b;
  const iconAddress = Address? styles.c : styles.d;
  //   const {Birth} = this.state;
  // const styleBirth = Birth ? styles.a : styles.b;
  // const iconBirth = Birth ? styles.c : styles.d;
    const {email} = this.state;
  const styleemail = email ? styles.a : styles.b;
  const iconemail = email ? styles.c : styles.d;
    return (
      <Container>
        <Header style={styles.header}>
         <StatusBar
           backgroundColor="#0000cc"
           barStyle="light-content"
         />
          <Left>
            <Button
              transparent 
              onPress={() => navigate('Profile')}>
              <Icon name="ios-arrow-back"  style ={{color: 'white', fontSize: 25}} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title} >ESYS BIODATA</Title>
          </Body>
          <Right />   
      </Header>
      <Content style={styles.content} >

         <Card style={styles.card} >
            <CardItem style={styles.card}>
              <Text style= {styles.text} >Demi Ke Amanan Bersama.
              Silahkan isi Data Diri Anda Dengan Benar.</Text>
            </CardItem>
          </Card>
         <Form>
            <Item floatingLabel style={styles.item}>
              <Icon name="ios-phone-portrait-outline" style ={iconnoHp} />
              <Label style={stylenoHp}>No Handphone</Label>
              <Input 
                 onChangeText={(noHp) => this.setState({noHp})}
                value={this.state.noHp}
              />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Icon name="ios-person-outline" style ={iconUser} />
              <Label style={styleUser}>Username</Label>
              <Input 
                 onChangeText={(User) => this.setState({User})}
                value={this.state.User}
              />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Icon name="ios-navigate-outline" style ={iconAddress} />
              <Label style={styleAddress}>Home Address</Label>
              <Input
                onChangeText={(Address) => this.setState({Address})}
                value={this.state.Address}
              />
            </Item>
            {/*<Item floatingLabel style={styles.item}>
                          <Icon name="ios-calendar-outline" style ={iconBirth} />
                          <Label style={styleBirth}>Date of birth</Label>
                          <Input 
                             onChangeText={(Birth) => this.setState({Birth})}
                            value={this.state.Birth}
                          />
                        </Item>*/}
            <Item floatingLabel style={styles.item}>
              <Icon name="ios-mail-outline" style ={iconemail} />
              <Label style={styleemail}>User Email</Label>
              <Input 
                 onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </Item>
           
          </Form>
        </Content>
        <Footer style={styles.footer} >
            <Button transparent style={styles.footer}>
              <Text style={{color: 'white'}} >SAVE DATA</Text>
            </Button>
        </Footer>
      </Container>
    );
  }
}
