import React, { Component } from 'react';
import { Container, Content,Text, Card, CardItem, View} from 'native-base';
import {StyleSheet} from 'react-native'
import btctrade from './../img/bitcointrade.png'
import { Image} from 'react-native'

const styles = StyleSheet.create({
    image:{
        height:50
    }
})

export default class HeaderExchange extends Component {   
    render(){ 
    return (
        <View>    
            <Image style={styles.image} source={btctrade} />
        </View>
    )
}
}

