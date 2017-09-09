import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';



//  Item chỉ có chức năng hiện 1 item, ko phải listview, item === template
export default Item = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Text>Hello màn hình {title}</Text>
            </View>
        </TouchableOpacity>
    );

}


var styles = StyleSheet.create({
    item:{
        backgroundColor:'pink',
        marginTop:3,
        padding:10,
        alignItems:'center',
        borderRadius: 3

    }
})