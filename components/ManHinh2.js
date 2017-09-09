import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ManHinh2 extends Component {

    render() {
        return (
            <View style={styles.container}><Text>hello man hinh 2</Text></View>
        );
    }
}




var styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1
    }
})