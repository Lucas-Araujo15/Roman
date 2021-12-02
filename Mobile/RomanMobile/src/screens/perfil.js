import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: [],
        };
    }

    Deslogar = () => {
        AsyncStorage.removeItem('senai-roman-chave-autenticacao')
        this.props.navigation.navigate('Login')
    }

    Cancelar = () => {
        this.props.navigation.navigate('Lista')
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.container}>
                    <Text style={styles.txtSair}>
                        {'deseja encerrar a sessão?'.toUpperCase()}
                    </Text>
                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.btnCancelar} onPress={this.Cancelar}>
                            <Text style={styles.txtCancelar}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnEncerrar}>
                            <Text style={styles.txtEncerrar} onPress={this.Deslogar}>Encerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtSair: {
        fontFamily: 'Raleway',
        fontSize: 20,
        color: '#000',
        letterSpacing: 5,
        width: 300,
        textAlign: 'center'
    },

    btnCancelar: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#F2EB0C',
        backgroundColor: 'transparent',
        width: 140,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnEncerrar: {
        borderRadius: 5,
        backgroundColor: '#F2EB0C',
        width: 140,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    txtCancelar: {
        fontFamily: 'Raleway',
        fontSize: 20,
        color: '#F2EB0C',
    },

    txtEncerrar: {
        fontFamily: 'Raleway',
        fontSize: 20,
        color: '#FFF',
    },

    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    container: {
        justifyContent: 'space-between',
        height: 130
    }


})