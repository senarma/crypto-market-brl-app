import React, { Component } from "react";
import Bitcoin from "./Bitcoin.js";
import Decred from "./Decred.js";
import Ethereum from "./Ethereum.js";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { Image } from 'react-native'
import btcIcon from './../img/mini/Bitcoin.png'
import dcrIcon from './../img/mini/Decred.png'
import ethIcon from './../img/mini/Ethereum.png'



export default (MainScreenNavigator = TabNavigator(
  {
    Bitcoin: { screen: Bitcoin },
    Decred: { screen: Decred },
    Ethereum: { screen: Ethereum }
  },
  {
    tabBarPosition: "bottom",
  
    tabBarComponent: props => {
      return (
        <Footer  >
          <FooterTab>
            <Button 
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Bitcoin")}>
              <Image source={btcIcon} style={{width: 40, height: 40}}  />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Decred")}>
              <Image source={dcrIcon} />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Ethereum")}>
              <Image source={ethIcon} />
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));