import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';

export default class ManHinh3 extends Component {
    constructor(props) {
        super(props)
        this.state = { showText: 'huy' };
    }
    click = () => {
        this.props.navigator.showModal({
            screen: "example.ManHinh2", // unique ID registered with Navigation.registerScreen
            title: this.state.showText, // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this.click}>
                    <Text>hello man hinh 3</Text>
                    <Image
                        source={require('../img/one.png')}
                        />
                </TouchableOpacity>

            </View>
        );
    }
}



var styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    }
})