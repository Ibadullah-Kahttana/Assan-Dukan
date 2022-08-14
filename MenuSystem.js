import React from 'react';
import { StyleSheet, Text, View , Image, ScrollView, TouchableOpacity , Dimensions} from 'react-native';


const MenuSystem = () =>{
    return(
           <View style={styles.container}>
           
            
            <View>
                <Text style={styles.orderHeader}> Online order </Text>
            </View>

            <ScrollView>
            <View style={{display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap'}}>
            
            <View>
            <TouchableOpacity
            onPress={()=>{console.log('begitable Pressed')}}>
                    <Image source={require('./assets/assanDukanPict/vegetableMenu.png')}  
                        style={styles.vegetable}
                    />
                    <View style={styles.text}> 
                      <Text style={styles.textStyle}> Vegetables </Text>
                    </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity
            onPress={()=>{}}>
                <Image source={require('./assets/assanDukanPict/FruitMenu.png')} 
                    style={styles.vegetable}
                />
                <View style={styles.text}> 
                  <Text style={styles.textStyle}> Fruits </Text>
                </View>
             </TouchableOpacity>   
            </View>
            
            <View>
            <TouchableOpacity
             onPress={()=>{}}>
                <Image source={require('./assets/assanDukanPict/BakeryMenu.jpg')} 
                    style={styles.vegetable}
                />
                <View style={styles.text}> 
                 <Text style={styles.textStyle}> Bakery </Text>
                </View>
            </TouchableOpacity>    
            </View>

            <View>
            <TouchableOpacity
            onPress={()=>{}}>
                <Image source={require('./assets/assanDukanPict/meat.jpeg')} 
                    style={styles.vegetable}
                />
                <View style={styles.text}> 
                 <Text style={styles.textStyle}> Meat Shop </Text>
                </View>
            </TouchableOpacity>    
            </View>

            <View>
            <TouchableOpacity
            onPress={()=>{}}>
                <Image source={require('./assets/assanDukanPict/milkshop.jpg')} 
                    style={styles.vegetable}
                />
                <View style={styles.text}> 
                   <Text style={styles.textStyle}> Milk Shop </Text>
                </View>
            </TouchableOpacity>    
            </View>

            <View>
            <TouchableOpacity
            onPress={()=>{}}>
                <Image source={require('./assets/assanDukanPict/generalStore.jpg')} 
                    style={styles.vegetable}
                />
                <View style={styles.text}>
                 <Text style={styles.textStyle}> General Store </Text> 
                </View>
            </TouchableOpacity>    
            </View>



             </View>
            </ScrollView>
            </View>
        
    );
}

const styles = StyleSheet.create({
    container:{backgroundColor:'white', width: '100%' , height: '100%' , alignItems:'center' , justifyContent:"center"},
    orderHeader:{
        alignItems:'center',
        justifyContent:"center",
        textAlign:'center',
        fontWeight:'bold',
        color:'black',
        fontSize:30,
        marginTop: 25,
        marginBottom:10,
        borderWidth:1,
        borderRadius:8,
    },

    vegetable:{
        height:120,
        width:130,
        margin:25,
    borderRadius:8,

        
    },

    text:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:-15,
        
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:15,
        color:'gray',
    }

   
})


export default MenuSystem;