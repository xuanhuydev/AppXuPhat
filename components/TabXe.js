import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, FlatList, TextInput } from 'react-native';


export default TabXe = ({loaixe,clickItem,mangData}) => {

    return (
        <View>
            <FlatList
                data={mangData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={clickItem}>
                        <View style={styles.item}>
                            <Text>Hel lo màn hình {loaixe} - {item.key}</Text>
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