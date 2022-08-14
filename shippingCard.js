import React,{useState,useEffect} from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import {product} from './vegetableproductData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ShippingCard = () => {

    return (
    
        <View>

        <TouchableOpacity style={vegetableProduct.shipping}>
            <FontAwesome  name="shopping-cart" color='green' size ={38}  
                        onPress={()=>{}}  />
                        
        </TouchableOpacity>
        
        </View>

    );

}

const vegetableProduct = StyleSheet.create({
       
   
    shipping: {
        marginLeft:320,
        marginTop:-575

    }


})

export default ShippingCard;