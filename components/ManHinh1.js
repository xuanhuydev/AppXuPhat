import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, FlatList, TextInput } from 'react-native';
import Navigation from 'react-native-navigation';
import Item from './Item'

export default class ManHinh1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 'huy',
            refresh: false,
            mangData: [
                { key: '0' },
                { key: '1' },
                { key: '2' }
            ]
        };

    }
    click = () => {
        this.props.navigator.showModal({
            screen: "example.ManHinh3", // unique ID registered with Navigation.registerScreen
            title: this.state.selected, // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    />

                <FlatList
                    refreshing={this.state.refresh}
                    onRefresh={() => { this.refresh } }
                    data={this.state.mangData}
                    renderItem={({item}) =>
                        <Item onPress={this.click} title={item.key} />}
                    />
            </View>

        );
    }
}
refresh = () => {

}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1
    }
})