
import React, {Component} from 'react';
import { Container, Header, Content, Footer, Text, StyleProvider } from 'native-base';
import ListCrypto from './src/components/ListCrypto';
import Navigation from './src/components/Navigation';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>

      <Container >
        <Navigation/>
      </Container>
      </StyleProvider>
    );
  }
}

