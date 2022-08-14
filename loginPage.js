import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

const Login = () => {
    const [num ,setNumber]= useState();
    const [submit ,setSubmit]= useState(false);
    const onPressHandler=() =>{
        setSubmit(!submit)
    }
    return(
        <>
    <View>
        <Text style={styles.header}> ASSAN DUKAN </Text>
        <TextInput
            value={num}
            placeholder ="  Continue with phone number"
            keyboardType="numeric"
            onChangeText={setNumber}
            style={styles.input}
        />
        
    </View>
    <View style={btn.button}>    
          <Button
            title = "Next"
            onPress={onPressHandler}
               />     
        
    </View>
     {submit? <Text style={{fontSize:10, margin:10}}> You entered the number {num} </Text>:null}
    </>
    );
}

const styles = StyleSheet.create({
    header:{
           textAlign:'center',
           fontWeight: 'bold' ,
           color: 'black',
           marginTop:20,
           fontSize:30

           
    },

    input : {
        height: 40,
        width:300,
        marginTop: 140,
        marginLeft:30,
        marginRight:10,
        borderWidth: 2.5,
        paddingTop: 5,
        marginBottom:15,
        paddingLeft:15
    },
})

const btn = StyleSheet.create({
    button:
    {
        width:100,
        marginLeft:235,
        marginTop:6   
        
    }
})

export default Login;

