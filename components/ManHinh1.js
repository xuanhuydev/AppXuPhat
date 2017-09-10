import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Navigation from 'react-native-navigation';
import TabXe from './TabXe';

export default class ManHinh1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mangData: [
                { key: '0' },
                { key: '1' },
                { key: '2' }
            ],
            loaixe: 'xe tai',
            refresh: false,
        };

    }



    clickItem = () => {
        this.props.navigator.showModal({
            screen: "example.ManHinh3", // unique ID registered with Navigation.registerScreen
            title: this.state, // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });

    }

    render() {
        return (

            <View>
                <View style={{ padding: 10 }}>
                    <TabXe loaixe={this.state.loaixe} clickItem={this.clickItem} mangData={this.state.mangData}/>
                </View>

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