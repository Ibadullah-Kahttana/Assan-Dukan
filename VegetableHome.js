import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image, ScrollView, TextInput,Button} from 'react-native';
import {product} from './vegetableproductData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ShippingCard from './shippingCard';
import { CartProvider, useCart } from "react-use-cart";
const star = {
    name1:['star-o', 'black'],
    name_half:['star-half','yellow'],
    name_full:['star','yellow']
};

const VegetableHome= () => {
  
    const  {addItem} = useCart();
    return (
        

        <>
        
        <ScrollView>
        <View style={vegetableProduct.menu}>
        { product.map((item)=>
            <View key={item.id}>
                <Image style={vegetableProduct.pics} source={item.image} />
                <View style = {vegetableProduct.starCss}>  
                <FontAwesome  name = {star.name_full[0]}  color = {star.name_full[1]}  size={18}/> 
                <FontAwesome  name = {star.name_full[0]}  color = {star.name_full[1]}size={18}/>  
                <FontAwesome  name = {star.name_half[0]}   color = {star.name_half[1]} size={18}/>  
                <FontAwesome  name = {star.name1[0]}   color = {star.name1[1]} size={18}/>  
                <FontAwesome  name = {star.name1[0]}   color = {star.name1[1]} size={18}/>   
            </View>
            <Text style={vegetableProduct.name}>{item.name}</Text>
            <Text style={vegetableProduct.pr} >{item.pr}</Text>

            <TouchableOpacity key={item.id} style={vegetableProduct.btn}>
                <Button
                onClick = {addItem(item)}
                title="Add to Card"
                color="green"
                accessibilityLabel="Learn more about this purple button"
                
                
                />

             </TouchableOpacity>
            
            
            

            
        </View>
        )}
        </View>
        </ScrollView>

        
 
        
        </>

    );
}

export default  VegetableHome;
const vegetableProduct = StyleSheet.create({
       
    pics:{
        width:130,
        height:80,
        margin:25,
       padding:40
    },
    menu:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    name:{
        fontSize:12,
        color:'black',
        marginTop:-2,
        marginLeft:26

    },
    pr:{
        fontSize:12,
        color:'black',
        marginTop:1,
        marginLeft:26
    },
    input:{
        width:74,
        height:40,
        borderColor:'black',
        borderWidth:2,
        marginTop:3,
        marginLeft:26

    },
    shipping:{
        marginLeft:320,
        marginTop:-128

    },
    starCss:{
        display:'flex',
        flexDirection:'row' ,
        marginTop:-25,
         marginLeft:26
        },
    btn:{
       width:126,
       height:40,
       marginLeft:18,
       marginTop:2
    }


})

