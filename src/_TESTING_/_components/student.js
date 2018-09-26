import React from 'react'
import { List, ListItem, Text, Left, Thumbnail, Body, Right } from  'native-base'

export default Student = (props) => (
	<List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tpFYE_0UBWqPwXbhfIzVEewCGaLSzw_M4f_DKLZ1yS4vqzN-' }} />
              </Left>
              <Body>
                <Text>{props.students}</Text>
                <Text note>{props.class}</Text>
              </Body>
              <Right>
                <Text note>hapus</Text>
                <Text note>edit</Text>
              </Right>
            </ListItem>
    </List>
)