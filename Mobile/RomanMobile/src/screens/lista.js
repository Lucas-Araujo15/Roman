import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: [],
        };
    }

    render(){
        return(
            <Text>Testando Login</Text>
        )
    }
}