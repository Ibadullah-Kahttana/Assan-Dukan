import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import VegetableProd from './vegetableProd';
 import { createDrawerNavigator } from '@react-navigation/drawer';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
 import { 
   Provider as PaperProvider, 
   DefaultTheme as PaperDefaultTheme,
   DarkTheme as PaperDarkTheme  } from 'react-native-paper';

 import  DrawerContent  from './DrawerContent';

 import MainTabScreen from './MainTabScreen';
 import SupportScreen from './SupportScreen';
 import SettingsScreen from './SettingsScreen';
 import BookmarkScreen from './BookmarkScreen';

 import { AuthContext } from './context';

 import RootStackScreen from './RootStackScreen';



const Drawer = createDrawerNavigator();

const App = () => {
   // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

   const initialLoginState = {
     isLoading: true,
     userName: null,
     userToken: null,
   };

   const CustomDefaultTheme = {
     ...NavigationDefaultTheme,
     ...PaperDefaultTheme,
     colors: {
       ...NavigationDefaultTheme.colors,
       ...PaperDefaultTheme.colors,
       background: '#ffffff',
       text: '#333333'
     }
   }
  
   const CustomDarkTheme = {
     ...NavigationDarkTheme,
     ...PaperDarkTheme,
     colors: {
       ...NavigationDarkTheme.colors,
       ...PaperDarkTheme.colors,
       background: '#333333',
       text: '#ffffff'
     }
   }

   const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

   const loginReducer = (prevState, action) => {
     switch( action.type ) {
       case 'RETRIEVE_TOKEN': 
         return {
           ...prevState,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGIN': 
         return {
           ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
         };
       case 'LOGOUT': 
         return {
           ...prevState,
           userName: null,
           userToken: null,
           isLoading: false,
         };
       case 'REGISTER': 
         return {
           ...prevState,
           userName: action.id,
           userToken: action.token,
           isLoading: false,
         };
     }
   };

   const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

   const authContext = React.useMemo(() => ({
     signIn: async(foundUser) => {

       const userToken = String(foundUser[0].userToken);
       const userName = foundUser[0].username;
      
       try {
         await AsyncStorage.setItem('userToken', userToken);
       } catch(e) {
         console.log(e);
       }
       // console.log('user token: ', userToken);
       dispatch({ type: 'LOGIN', id: userName, token: userToken });
     },
     signOut: async() => {

       try {
         await AsyncStorage.removeItem('userToken');
       } catch(e) {
         console.log(e);
       }
       dispatch({ type: 'LOGOUT' });
     },
     signUp: () => {
       // setUserToken('fgkj');
       // setIsLoading(false);
     },
     toggleTheme: () => {
       setIsDarkTheme( isDarkTheme => !isDarkTheme );
     }
   }), []);

   useEffect(() => {
     setTimeout(async() => {
       // setIsLoading(false);
       let userToken;
       userToken = null;
       try {
         userToken = await AsyncStorage.getItem('userToken');
       } catch(e) {
         console.log(e);
       }
       // console.log('user token: ', userToken);
       dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
     }, 1000);
   }, []);

   if( loginState.isLoading ) {
     return(
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator size="large"/>
       </View>
     );
   }
   return (
     <PaperProvider theme={theme}>
     <AuthContext.Provider value={authContext}>
     <NavigationContainer theme={theme}>
       { loginState.userToken !== null ? (
         <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
           <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
           <Drawer.Screen name="SupportScreen" component={SupportScreen} />
           <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
           <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
         </Drawer.Navigator>
       )
     :
       <RootStackScreen/>
     }
     </NavigationContainer>
     </AuthContext.Provider>
     </PaperProvider>



   );
 }

export default App;