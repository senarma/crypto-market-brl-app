import React, { Component } from 'react';
import { Container, Content,Text, Card, CardItem, View} from 'native-base';
import { Image} from 'react-native'
import {StyleSheet} from 'react-native'
import axios from 'axios'
import PurePrice from './PurePrice'
import decredImg from './../img/Decred.png'

const styles = StyleSheet.create({
   title:{
    fontSize:30,
    alignItems: 'center',
    color:'white',
    paddingTop: 15,
    paddingLeft: 8
  }

});

export default class Decred extends Component {

  state = {
    sellProfitfy: undefined,
    lastProfitfy: undefined,
    buyProfitfy: undefined,
    sellBraziliex: undefined,
    lastBraziliex: undefined,
    buyBraziliex: undefined,
    lastOmni: undefined,
    sellOmni: undefined,
    buyOmni: undefined

  }

 getProfitfy(){
   const url = 'https://profitfy.trade/api/v1/public/ticker/DCR/BRL'
   axios.get(url).then((response) => {
     this.setState({
      sellProfitfy:response.data[0].sell,
      lastProfitfy: response.data[0].last,
      buyProfitfy: response.data[0].buy
    })
   }).catch(err => console.log(err))
 }

 getBraziliex(){
  const url = 'https://braziliex.com/api/v1/public/ticker/dcr_brl'
  axios.get(url).then((response) => {
    this.setState({sellBraziliex: response.data.lowestAsk, lastBraziliex: response.data.last, buyBraziliex: response.data.highestBid})
  }).catch(err => console.log(err))
}


getOmni(){
  const url = "https://omnitrade.io/api/v2/tickers/dcrbrl"
  axios.get(url).then(response => {
    this.setState({
      lastOmni: response.data.ticker.last,
      sellOmni: response.data.ticker.sell, 
      buyOmni: response.data.ticker.buy})
  }).catch(err => console.log(err))
}

 componentWillMount(){
   this.getProfitfy()
   this.getBraziliex()
   this.getOmni()
 }

  render() {
    
    return (
      <Container >

          <View style={{alignItems:'center', paddingBottom: 10, paddingTop:10}}>
      <Text>DCR/BRL</Text></View>
      <Content padder >     
      
     
          <PurePrice 
            data={{exchange:'Profitfy', sell: this.state.sellProfitfy, buy:this.state.buyProfitfy, last:this.state.lastProfitfy, }}
          />
          <PurePrice 
            data={{exchange:'Braziliex', sell: this.state.sellBraziliex, buy:this.state.buyBraziliex, last:this.state.lastBraziliex, }}
          />
 
          <PurePrice 
            data={{exchange:'OmniTrade', sell: this.state.sellOmni, buy:this.state.buyOmni, last:this.state.lastOmni, }}
          />
          

             
        </Content>
      </Container>
    );
  }
}