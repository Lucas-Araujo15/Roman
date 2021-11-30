import React, { Component } from 'react';

import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import Cadastro from './cadastro';
import Lista from './lista';
import Perfil from './perfil';

class Main extends Component {
    render() {
        return (
            <View style={styles.main}>
                <StatusBar
                    hidden={false}
                />

                <bottomTab.Navigator
                    initialRouteName='Lista'

                    screenOptions={({ route }) => ({
                        tabBarIcon: () => {
                            if (route.name === 'Lista') {
                                return (
                                    <Image
                                        source={require('../../assets/icon-lista.png')}
                                        style={styles.tabBarIcon}
                                    />
                                )
                            }
                            if (route.name === 'Cadastro') {
                                return (
                                    <Image
                                        source={require('../../assets/icon-cadastrar.png')}
                                        style={styles.tabBarIcon}
                                    />
                                )
                            }
                            if (route.name === 'Perfil') {
                                return (
                                    <Image
                                        source={require('../../assets/icon-perfil.png')}
                                        style={styles.tabBarIcon}
                                    />
                                )
                            }
                        },

                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarActiveBackgroundColor: '#FFFDCA',
                        tabBarInactiveBackgroundColor: '#FFFFFF',
                        tabBarStyle: { height: 60 },
                        
                    })}
                >
                    <bottomTab.Screen name="Lista" component={Lista} />
                    <bottomTab.Screen name="Cadastro" component={Cadastro} />
                    <bottomTab.Screen name="Perfil" component={Perfil} />

                </bottomTab.Navigator>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    tabBarIcon: {
        color: '#000'
    }
})


export default Main;
