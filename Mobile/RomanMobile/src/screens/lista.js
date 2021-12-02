import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View, ScrollView } from 'react-native';

import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: [],
        };
    }

    buscarProjetos = async () => {

        const requisicao = await api.get('/projetos', {
            headers: {
                Authorization: 'Bearer ' + await AsyncStorage.getItem('senai-roman-chave-autenticacao'),
            },
        })

        const dados = requisicao.data

        this.setState({ listaProjetos: dados })
    }

    componentDidMount() {
        this.buscarProjetos();
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.boxHeader}>
                        <Text style={styles.h1}>
                            {'projetos'.toUpperCase()}
                        </Text>
                    </View>
                </View>
                <View style={styles.main}>
                    <FlatList
                        data={this.state.listaProjetos}
                        keyExtractor={item => item.idProjeto}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }

    renderItem = ({ item }) => (
        <View style={styles.espacoLista}>
            <View style={styles.itemLista}>
                <View style={styles.tema}>
                    <View style={styles.boxTema}>
                        <Text style={styles.txtTema}>{item.idTemaNavigation.tituloTema}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.projTitulo}>{item.tituloProjeto}</Text>
                    <Text style={styles.projDesc}>{item.descricao}</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },

    header: {
        width: '100%',
        height: 80,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30
    },

    h1: {
        fontFamily: 'Raleway',
        fontSize: 20,
        color: '#000',
        letterSpacing: 5,
    },

    boxHeader: {
        borderBottomColor: '#E9E200',
        borderBottomWidth: 3,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 35
    },

    itemLista: {
        width: '80%',
        height: 98,
        backgroundColor: '#FFFDCA',
        borderRadius: 5,
        marginBottom: 30
    },

    espacoLista: {
        width: '100%',
        alignItems: 'center',
    },

    main: {
        marginBottom: 115
    },

    boxTema: {
        backgroundColor: '#fff',
        width: 140,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: '#E2DC12'
    },

    tema: {
        alignItems: 'flex-end'
    },

    txtTema: {
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF'
    },

    projTitulo: {
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 10,
        color: '#000'
    },

    projDesc: {
        fontFamily: 'Raleway',
        fontSize: 15,
        paddingLeft: 10,
        color: '#989898'
    }
})