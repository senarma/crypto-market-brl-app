import React, { Component } from 'react';
import { Container, Content,Text, Card, CardItem, View } from 'native-base';
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    buy: {
    color: '#44bd32',
    fontSize: 13
  },
  sell:{
    color: 'red',
    fontSize: 13
  },
  title:{
    fontSize:30,
    alignItems: 'center',
    color:'white'
  },
  subTitle:{
    fontSize:10,
    color: '#718093'
  },
  lastPrice:{
    color: 'white',
    fontSize:20
  },
  exchange: {
    color: '#b2bec3',
    paddingBottom: 5,
    fontSize:20
  }
 

});

//RECEBE ORDEM LAST, BUY E SELL

const PurePrice = (props) => {
    return (



      <Card style={{alignItems:'center', borderRadius: 10}}>
      <Text style={styles.exchange}>{props.data.exchange}</Text>
        
          <View style={{flexDirection: "column", alignItems:'center', paddingBottom:10}}>
            <Text style={styles.lastPrice}>
               R$ {props.data.last}
            </Text>
            <Text style={styles.subTitle}> 
                Ultimo
            </Text>             
          </View>

          <View style={{flexDirection: "row"}}>

          <View bordered style={{flexDirection: "column", alignItems:'center'}} >
              <Text style={styles.sell}> 
              R$ {props.data.sell}
              </Text>
              <Text style={styles.subTitle}> 
                Venda
              </Text>
          </View>

          <View style={{paddingRight: 20, paddingLeft:20}}></View>

             <View bordered style={{flexDirection: "column", alignItems:'center'}}>
              <Text style={styles.buy}>
              R$ {props.data.buy}
              </Text>
              <Text style={styles.subTitle}> 
                Compra
              </Text>
          </View>

          </View>
          
          </Card>

    )
}

export default PurePrice