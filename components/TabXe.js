import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, FlatList, TextInput } from 'react-native';
import Item from './Item'

export default TabXe = ({loaixe,clickItem}) => {
    var mangData = [
        { key: '0' },
        { key: '1' },
        { key: '2' }
    ]
    return (
        <View>
            <FlatList
                data={mangData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={clickItem}>
                        <View style={styles.item}>
                            <Text>Hello màn hình {loaixe}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                />
        </View>

    );
}


var styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1
    },
    item: {
        backgroundColor: 'pink',
        marginTop: 3,
        padding: 10,
        alignItems: 'center',
        borderRadius: 3

    }
})