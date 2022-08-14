import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import * as Animatable from 'react-native-animatable';

import { AuthContext } from './context';


const DrawerContent = ({props , navigation}) => {

    const handler = param => {
        setActiveButton(param);
        navigation.navigate(param);
    }
    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);
    const [activeButton, setActiveButton] = useState('Home');

    return (

        <View style={{ flex: 1, backgroundColor: 'black', }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.rawerContent}>
                    <View style={{ width: '100%', height: '25%' }}>
                        <Animatable.Image
                            animation="zoomIn"
                            duraton="10000"
                            source={require('./assets/assanDukanPict/logo.png')}
                            style={styles.logo}
                            resizeMode="stretch"
                        />
                    </View>


                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                activeButton === 'Home' ?
                                    <Icon
                                        name="home"
                                        color={'black'}
                                        size={size}
                                    />
                                    :
                                    <Icon
                                        name="home-outline"
                                        color={'#ffcc00'}
                                        size={size}
                                    />
                            )}


                            label={({ focused, color }) => <Text style={{ color: activeButton === 'Home' ? 'black' : '#ffcc00' }}>Home</Text>}

                            onPress={() => handler('Home')}

                            labelStyle={{
                                color: activeButton === 'Home' ? '#ffcc00' : 'black'
                            }}
                            style={{ borderRadius: 20, borderWidth: 1, borderColor: '#ffcc00', backgroundColor: activeButton === 'Home' ? '#ffcc00' : 'black' , width:'70%',marginTop:10}}

                        />



                        <DrawerItem
                            icon={({ color, size }) => (
                                activeButton === 'Profile' ?
                                    <Icon
                                        name="account"
                                        color={'black'}
                                        size={size}
                                    />
                                    :
                                    <Icon
                                        name="account-outline"
                                        color={'#ffcc00'}
                                        size={size}
                                    />
                            )}


                            label={({ focused, color }) => <Text style={{ color: activeButton === 'Profile' ? 'black' : '#ffcc00' }}>Profile</Text>}

                            onPress={() => handler('Profile')}

                            labelStyle={{
                                color: activeButton === 'Profile' ? '#ffcc00' : 'black'
                            }}
                            style={{ borderRadius: 20, borderWidth: 1, borderColor: '#ffcc00', backgroundColor: activeButton === 'Profile' ? '#ffcc00' : 'black' ,width:'70%',marginTop:10}}

                        />




                        <DrawerItem
                        icon={({ color, size }) => (
                            activeButton === 'Settings' ?
                                <Ionicons
                                    name="settings"
                                    color={'black'}
                                    size={size}
                                />
                                :
                                <Ionicons
                                    name="settings-outline"
                                    color={'#ffcc00'}
                                    size={size}
                                />
                        )}


                            label={({ focused, color }) => <Text style={{ color: activeButton === 'Settings' ? 'black' : '#ffcc00' }}>Settings</Text>}

                            onPress={() => handler('Settings')}

                            labelStyle={{
                                color: activeButton === 'Settings' ? '#ffcc00' : 'black'
                            }}
                            style={{ borderRadius: 20, borderWidth: 1, borderColor: '#ffcc00', backgroundColor: activeButton === 'Settings' ? '#ffcc00' : 'black',width:'70%',marginTop:10 }}

                        />


                        <DrawerItem
                            icon={({ color, size }) => (
                                activeButton === 'Notifications' ?
                                    <Icon
                                        name="bell"
                                        color={'black'}
                                        size={size}
                                    />
                                    :
                                    <Icon
                                        name="bell-outline"
                                        color={'#ffcc00'}
                                        size={size}
                                    />
                            )}


                            label={({ focused, color }) => <Text style={{ color: activeButton === 'Notifications' ? 'black' : '#ffcc00' }}>Notifications</Text>}

                            onPress={() => handler('Notifications')}

                            labelStyle={{
                                color: activeButton === 'Notifications' ? '#ffcc00' : 'black'
                            }}
                            style={{ borderRadius: 20, borderWidth: 1, borderColor: '#ffcc00', backgroundColor: activeButton === 'Notifications' ? '#ffcc00' : 'black' ,width:'70%', marginTop:10}}

                        />

                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text style={{color:"#ffcc00"}}>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={'black'}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{
                        color:  'black',
                        fontWeight:'bold'
                    }}
                    onPress={() => { signOut() }}
                    style={{ borderRadius: 20, borderWidth: 1, borderColor: '#ffcc00', backgroundColor: '#ffcc00' ,width:'70%', marginTop:10}}

                />
            </Drawer.Section>
        </View>

    );
}
export default DrawerContent;

const styles = StyleSheet.create({
    rawerContent: {
        flex: 1,
    },
    logo: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        marginLeft: 65
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: 'red'
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 50,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginTop:60,
    },
});