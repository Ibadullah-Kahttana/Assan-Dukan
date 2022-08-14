import React from 'react';
import {

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={theme.dark ? "dark-content" : "light-content"} />

      // Header Bar
      <View style={styles.headerBar}>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="ios-menu" color="black" size={30} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}> Order Food </Text>

        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
        <View style={{
          width: (windowWidth / 100) * 12,
          height: (windowHeight / 100) * 6,
          borderRadius:50,
          alignItems:'center',
          justifyContent:'center'
        }}><Image
            source={require('./assets/assanDukanPict/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          /></View>

        </TouchableOpacity>
      </View>
<<<<<<< HEAD
<Text>commit from majeed </Text>
=======

<View>
  <Text> Commit From Ibad</Text>
</View>
>>>>>>> bff66ae7eeb3a9f6a60461e1081ffd91d53f2f3d

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  headerBar: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 8,
    justifyContent: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingRight: 15
  },
  logo: {
    width: (windowWidth / 100) * 12,
    height: (windowHeight / 100) * 6,

  },

});