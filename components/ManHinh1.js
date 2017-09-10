import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, FlatList, TextInput } from 'react-native';
import Navigation from 'react-native-navigation';
import Item from './Item';
import TabXe from './TabXe';

export default class ManHinh1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaixe: 'xe khac',
            refresh: false,
            mangData: [
                { key: '0' },
                { key: '1' },
                { key: '2' }
            ]
        };

    }

    clickItem = () => {
        console.log('huy')
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TabXe loaixe={this.state.loaixe} />
            </View>

        );
    }
}


var styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1
    }
})