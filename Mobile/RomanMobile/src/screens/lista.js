import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View, ScrollView } from 'react-native';

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

    render() {
        return (
            <ScrollView style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.boxHeader}>
                        <Text style={styles.h1}>
                            {'projetos'.toUpperCase()}
                        </Text>
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
    }
})