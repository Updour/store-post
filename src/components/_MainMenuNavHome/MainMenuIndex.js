import React, { Component } from "react";
import { Accordion, Content, Card, CardItem, Text } from "native-base";
import styles from './styles'


export default class MainMenuIndex extends Component {
    constructor (props) {
        super(props)

            state = {
            }
    }
    render() {
        return (
            <Content style={styles.accordion} >
                <Content>
                    <Card>
                        <CardItem>
                            <Text>
                                this. card
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
                <Content>
                     <Accordion 
                        dataArray = { dataArray}
                        icon = 'add'
                        expandedIcon = 'remove'
                        iconStyle = {{ color : 'blue' }}
                        expandedIconStyle = {{ color : 'red' }}
                    />
                </Content>
            </Content>
        )
    }
}

const dataArray = [
    { 
        title: "Cara Penggunaan", 
        content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" 
    },
    { 
        title: "Tentang Aplikasi", 
        content: "Lorem ipsum dolor sit amet" 
    },
    { 
        title: "Hubungi Kami", 
        content: "Lorem ipsum dolor sit amet" 
    }
];