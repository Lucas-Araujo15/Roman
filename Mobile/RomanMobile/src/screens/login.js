import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  logar = async () => {
    const requisicao = await api.post('/login', {
      email: this.state.email,
      senha: this.state.senha,
    });

    const token = requisicao.data.token

    AsyncStorage.setItem('senai-roman-chave-autenticacao', token)

    if (requisicao.status == 200) {
      this.props.navigation.navigate('Main')
    }
  }


  render() {
    return (
      <View style={styles.main}>
        <View style={styles.viewLogo}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoRoman}
          />
          <Text style={styles.nomeApp}>roman</Text>
        </View>
        <View style={styles.viewInputs}>
          <TextInput style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#000"
            keyboardType="email-address"
          />
          <TextInput style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#000"
            keyboardType="email-address"
            secureTextEntry={true}
            keyboardType="default"
          />
          <TouchableOpacity
            onPress={this.logar}
            style={styles.btnLogar}
          >
            <Text style={styles.txtLogar}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View >

    )
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 360
  },

  logoRoman: {
    width: 400,
    height:250,
  },

  nomeApp: {
    textTransform: 'uppercase',
    fontFamily: 'Raleway',
    fontSize: 38,
    letterSpacing: 10,
    color: '#E9E200'
  },

  input: {
    fontFamily: 'Raleway',
    fontSize: 15,
    borderRadius: 10,
    borderColor: '#E9E200',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 333,
    height: 57,
    padding: 15,
  },

  viewInputs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 220
  },

  btnLogar:{
    backgroundColor:'#E9E200',
    borderRadius: 10,
    width: 333,
    alignItems:'center',
    justifyContent:'center',
    height: 57,
  },

  txtLogar:{
    fontFamily: 'Raleway',
    fontSize: 15,
    color:'#FFFFFF',
    fontWeight:'bold'
  }


})