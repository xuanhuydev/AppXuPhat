import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class ChiTiet extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text>chi tiet: {this.props.tenLoi}</Text>
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