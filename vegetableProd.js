import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image, ScrollView, TextInput,Button} from 'react-native';
import VegetableHome from './VegetableHome.js';
import ShippingCard from './shippingCard.js';

const VegetableProd= () => {
    
    return (

        <>
        
        <View>
        <TouchableOpacity
        onPress={()=>{}}>
                <Image source={require('./assets/assanDukanPict/vegetableMenu.png')}  
                    style={vegetableProduct.vegetable}
                />
                <View style={vegetableProduct.text}> 
                  <Text style={vegetableProduct.textStyle}> Vegetables </Text>
                </View>
        </TouchableOpacity> 
        </View>
        <VegetableHome />
        <ShippingCard />
        
      
        
        </>

    );
}

export default VegetableProd;

const vegetableProduct = StyleSheet.create({
       vegetable:{
        height:120,
        width:180,
        margin:10,
        marginLeft: 'auto',
        marginRight: 'auto',
       },
       text:{
        justifyContent:'center',
        alignItems:'center',
        position:'relative',   
        
    },
      
    textStyle:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
        backgroundColor:'gray',
        marginTop:-25
    },
   
    
  
   


})

