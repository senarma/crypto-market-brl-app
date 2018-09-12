import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListCrypto extends Component {
  render() {
    var items = [{
        name: 'Bitcoin',
        sigla: 'BTC'
    },   {
        name: 'Litecoin',
        sigla: 'LTC'
    },  {
        name: 'Decred',
        sigla: 'DCR'
    },  {
        name: 'Ethereum',
        sigla: 'ETH'
    },     
    ];
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text >{item.name}</Text>
                <Text>{item.sigla}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}