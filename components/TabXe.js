import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, FlatList, TextInput } from 'react-native';
import Item from './Item'

export default TabXe = ({loaixe, mangData}) => {
    return (
        <View style={{ padding: 20 }}>
            

            <Text>hello {loaixe}</Text>

            <FlatList
                data={mangData}
                renderItem={({item}) =>
                    <Item onPress={this.clickItem} title={item.key} />}
                />
        </View>

    );
}



var styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1
    }
})