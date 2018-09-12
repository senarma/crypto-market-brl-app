import React, { Component } from 'react';
import { Container, Content,Text, Card, CardItem, View } from 'native-base';
import {StyleSheet} from 'react-native'
import { Image} from 'react-native'
import axios from 'axios'
import PurePrice from './PurePrice'
import ethImg from './../img/Ethereum.png'




const styles = StyleSheet.create({

title:{
  fontSize:30,
  alignItems: 'center',
  color:'white',
  paddingTop: 15,
  paddingLeft: 8
}

});

export default class Ethereum extends Component {

  state = {
    lastBraziliex: undefined,
    sellBraziliex: undefined,
    buyBraziliex: undefined,
    lastBtctrade: undefined,
    sellBtctrade: undefined,
    buyBtctrade: undefined,
    lastCryptomkt: undefined,
    sellCryptomkt:undefined,
    buyCryptomkt: undefined,
    lastOmni: undefined,
    sellOmni: undefined,
    buyOmni: undefined

  }

  getBraziliex(){
    const url = 'https://braziliex.com/api/v1/public/ticker/eth_brl'
    axios.get(url).then((response) => {
      this.setState({sellBraziliex: response.data.lowestAsk, lastBraziliex: response.data.last, buyBraziliex: response.data.highestBid})
    }).catch(err => console.log(err))
  }

  getBtctrade(){
    const url = "https://api.bitcointrade.com.br/v1/public/ETH/ticker/"
    axios.get(url).then(response => {
        this.setState({
          lastBtctrade: response.data.data.last,
          sellBtctrade: response.data.data.sell, 
          buyBtctrade: response.data.data.buy})
    }).catch(err => console.log(err))
  }

  getCryptomkt(){
    const url = "https://api.cryptomkt.com/v1/ticker?market=ETHBRL"
    axios.get(url).then( response => {
      console.log(response.data.data[0].ask)
      this.setState({
        lastCryptomkt: response.data.data[0].last_price,
        sellCryptomkt: response.data.data[0].ask, 
        buyCryptomkt: response.data.data[0].bid})
    }).catch(err => console.log(err))
  }

  getOmni(){
    const url = "https://omnitrade.io/api/v2/tickers/ethbrl"
    axios.get(url).then(response => {
      this.setState({
        lastOmni: response.data.ticker.last,
        sellOmni: response.data.ticker.sell, 
        buyOmni: response.data.ticker.buy})
    }).catch(err => console.log(err))
  }

  getFlowbtc(){

  }

  componentWillMount(){
    this.getBraziliex()
    this.getFlowbtc()
    this.getBtctrade()
    this.getCryptomkt()
    this.getOmni()
  }


  render() {
    
    return (
      <Container>
        <View style={{alignItems:'center', paddingBottom: 10, paddingTop:10}}>
      <Text>ETH/BRL</Text></View>

        <Content padder>
          
          <PurePrice 
            data={{exchange:'Bitcointrade', sell: this.state.sellBtctrade, buy:this.state.buyBtctrade, last:this.state.lastBtctrade, }}
          />

          <PurePrice 
            data={{exchange:'Braziliex', sell: this.state.sellBraziliex, buy:this.state.buyBraziliex, last:this.state.lastBraziliex, }}
          />

          <PurePrice 
            data={{exchange:'CryptoMKT', sell: this.state.sellCryptomkt, buy:this.state.buyCryptomkt, last:this.state.lastCryptomkt, }}
          />          

          <PurePrice 
            data={{exchange:'OmniTrade', sell: this.state.sellOmni, buy:this.state.buyOmni, last:this.state.lastOmni, }}
          />
          
             
        </Content>
      </Container>
    );
  }
}