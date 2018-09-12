import React, { Component } from 'react';
import { Container, Content,Text, Card, CardItem, View } from 'native-base';
import axios from 'axios'
import {StyleSheet} from 'react-native'
import { Image} from 'react-native'
import PurePrice from './PurePrice';
import btcImg from './../img/Bitcoin2.png'
import braziliex from './../img/braziliex.png'


const styles = StyleSheet.create({
title:{
  fontSize:30,
  color:'white',
  paddingTop: 15,
  paddingLeft: 8
}

});

export default class Bitcoin extends Component {
  state = { 
    lastBraziliex: undefined,
    sellBraziliex: undefined,
    buyBraziliex: undefined,
    lastWalltime:undefined,
    sellWalltime:undefined,
    buyWalltime:undefined,
    lastBtctrade: undefined,
    sellBtctrade: undefined,
    buyBtctrade: undefined,
    lastNegocie: undefined,
    sellNegocie: undefined,
    buyNegocie: undefined,
    sellProfitfy: undefined,
    lastProfitfy: undefined,
    buyProfitfy: undefined,
    lastMercadobtc: undefined,
    sellMercadobtc: undefined,
    buyMercadobtc: undefined,
  }

  getBtctrade(){
    const url = "https://api.bitcointrade.com.br/v1/public/BTC/ticker/"
    axios.get(url).then(response => {
        this.setState({
          lastBtctrade: response.data.data.last,
          sellBtctrade: response.data.data.sell, 
          buyBtctrade: response.data.data.buy})
    }).catch(err => console.log(err))
  }

  getProfitfy(){
    const url = 'https://profitfy.trade/api/v1/public/ticker/BTC/BRL'
    axios.get(url).then((response) => {
      this.setState({
       sellProfitfy:response.data[0].sell,
       lastProfitfy: response.data[0].last,
       buyProfitfy: response.data[0].buy
     })
    }).catch(err => console.log(err))
  }

  getWalltime(){
    const url= "https://s3.amazonaws.com/data-production-walltime-info/production/dynamic/walltime-info.json?"
    axios.get(url).then(response => {
      console.log(response.data.BRL_XBT.last)
      this.setState({
        lastWalltime: response.data.BRL_XBT.last_inexact,
        sellWalltime: response.data.BRL_XBT.lowest_ask_inexact,
        buyWalltime: response.data.BRL_XBT.highest_bid_inexact})
    }).catch(err => console.log(err))
  }

  getBraziliex(){
    const url = 'https://braziliex.com/api/v1/public/ticker/btc_brl'
    axios.get(url).then((response) => {
      this.setState({sellBraziliex: response.data.lowestAsk, lastBraziliex: response.data.last, buyBraziliex: response.data.highestBid})
    }).catch(err => console.log(err))
  }

  getNegocie(){
    const url = 'https://broker.negociecoins.com.br/api/v3/btcbrl/ticker'
    axios.get(url).then((response) => {
      this.setState({sellNegocie: response.data.sell, lastNegocie: response.data.last, buyNegocie: response.data.buy})
    }).catch(err => console.log(err))
  }

  getMercadoBitcoin(){
    const url='https://www.mercadobitcoin.net/api/BTC/ticker/'
    axios.get(url).then((response) => {
      const { sell, last , buy} = response.data.ticker
      this.setState({sellMercadobtc: sell, lastMercadobtc: last, buyMercadobtc: buy})
      
    }).catch(err => console.log(err))
  }


  
  
  componentWillMount(){
    this.getBraziliex()
    this.getWalltime()
    this.getBtctrade()
    this.getNegocie()
    this.getProfitfy()
    this.getMercadoBitcoin()
  }

  render() {
    
    return (
      <Container style={{color: 'black'}} >
      <View style={{alignItems:'center', paddingBottom: 10, paddingTop:10}}>
      <Text>BTC/BRL</Text></View>
        <Content padder>          
          
      
          <PurePrice 
            data={{exchange: 'Walltime', sell: this.state.sellWalltime, buy:this.state.buyWalltime, last:this.state.lastWalltime, }}
          />
      
          <PurePrice 
            data={{exchange: 'Profitfy', sell: this.state.sellProfitfy, buy:this.state.buyProfitfy, last:this.state.lastProfitfy, }}
          />

          <PurePrice 
            data={{exchange: 'Bitcointrade', sell: this.state.sellBtctrade, buy:this.state.buyBtctrade, last:this.state.lastBtctrade, }}
          />
       
          <PurePrice 
            data={{exchange:'Negocie coins', sell: this.state.sellNegocie, buy:this.state.buyNegocie, last:this.state.lastNegocie, }}
          />
     
          <PurePrice 
            data={{exchange:'Braziliex', sell: this.state.sellBraziliex, buy:this.state.buyBraziliex, last:this.state.lastBraziliex, }}
          />
   
          <PurePrice 
            data={{exchange: 'Mercado Bitcoin', sell: this.state.sellMercadobtc, buy:this.state.buyMercadobtc, last:this.state.lastMercadobtc, }}
          />

          

        </Content>
      </Container>
    );
  }
}