import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image, ScrollView, TextInput} from 'react-native';
import {product} from './vegetableproductData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const star = {
    name1:['star-o', 'black'],
    name_half:['star-half','yellow'],
    name_full:['star','yellow']
};



const VegetableProduct = () => {
    const [Numbers,setNumber]=useState();
    const [totalMoney,setMoney]=useState([]);
    

    const change = (text) =>{
        setNumber(text);   
    };

    const calculate = (p) => {
        if(Numbers !=0 )
        {
            let Total = 0;
            Total += Numbers * p;
            
            setMoney(Total);
        }

        console.log(totalMoney);
        
    
        
    } ;
   
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
            <TextInput 
                placeholder = '    1'
                value={Numbers}  
                onChangeText={(text) => change(text)}
                keyboardType = "numeric"
                style={vegetableProduct.input}
                
                
            
            />
            
            <TouchableOpacity style={vegetableProduct.shipping}>
                <FontAwesome  name="shopping-cart" color='blue' size ={38}  
                onPress={() => calculate(item.price)}
                
                />
            
            </TouchableOpacity>
            

            
            </View>
        )}
           
        </View>
        </ScrollView>

        
 
        
        </>

    );
}


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
        marginLeft:105,
        marginTop:-36

    },
    starCss:{
        display:'flex',
        flexDirection:'row' ,
        marginTop:-25,
         marginLeft:26
        }


})

export default VegetableProduct;