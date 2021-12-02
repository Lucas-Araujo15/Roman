import React, { Component } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { Picker } from '@react-native-picker/picker';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeProjeto: '',
            descProjeto: '',
            temaProjeto: 0
        };
    }

    Cancelar = () => {
        this.setState({
            nomeProjeto: '',
            descProjeto: '',
            temaProjeto: 0
        })
    }

    Cadastrar = async () => {
        const requisicao = await api.post('/projetos', {
            idTema: this.state.temaProjeto,
            descricao: this.state.descProjeto,
            tituloProjeto: this.state.nomeProjeto
        },
            {
                headers: {
                    Authorization: 'Bearer ' + await AsyncStorage.getItem('senai-roman-chave-autenticacao'),
                },
            })

        this.props.navigation.navigate('Lista')
    }

    render() {
        return (
            <ScrollView style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.boxHeader}>
                        <Text style={styles.h1}>
                            {'cadastro'.toUpperCase()}
                        </Text>
                    </View>
                </View>
                <View style={styles.main}>
                    <TextInput style={styles.nomeProj}
                        placeholder="Nome do projeto"
                        placeholderTextColor="#969696"
                        onChangeText={nomeProjeto => this.setState({ nomeProjeto })}
                    />

                    <TextInput style={styles.descProj}
                        placeholder="Descrição"
                        placeholderTextColor="#969696"
                        onChangeText={descProjeto => this.setState({ descProjeto })}
                    />

                    <TextInput style={styles.temaProj}
                        placeholder="Tema do projeto"
                        placeholderTextColor="#969696"
                        onChangeText={temaProjeto => this.setState({ temaProjeto })}
                    />

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.btnCancelar} onPress={this.Cancelar}>
                            <Text style={styles.txtCancelar}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnConcluir}>
                            <Text style={styles.txtConcluir} onPress={this.Cadastrar}>Concluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    body: {
        flex: 1
    },

    header: {
        width: '100%',
        height: 80,
        justifyContent: 'flex-end',
        alignItems: 'center'
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

    main: {
        height: 420,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },

    nomeProj: {
        backgroundColor: '#EAE6E6',
        borderRadius: 10,
        width: '80%',
        height: 50,
        paddingLeft: 20
    },

    descProj: {
        backgroundColor: '#EAE6E6',
        borderRadius: 10,
        width: '80%',
        height: 200,
        paddingLeft: 20,
        alignContent: 'flex-start'
    },

    temaProj: {
        backgroundColor: '#FFFDCA',
        borderRadius: 10,
        width: '80%',
        height: 50,
        paddingLeft: 20
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },

    btnCancelar: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#F2EB0C',
        backgroundColor: 'transparent',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnConcluir: {
        borderRadius: 5,
        backgroundColor: '#F2EB0C',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    txtCancelar: {
        fontFamily: 'Raleway',
        fontSize: 20,
        color: '#F2EB0C',
    },

    txtConcluir: {
        fontFamily: 'Raleway',
        fontSize: 20,
        color: '#FFF',
    }

})