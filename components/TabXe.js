import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, FlatList, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class TabXe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mangData: [
                { key: '1991', tuoi: 18 },
                { key: '1993', tuoi: 20 },
                { key: '1995', tuoi: 15 }
            ],
            keyword: 'Nhập từ khóa cần tìm...',
            blurOnSubmit: true
        }
    }

    clickItem = (item) => {
        Navigation.showModal({
            screen: "example.ChiTiet", // unique ID registered with Navigation.registerScreen
            title: 'Chi Tiet', // title of the screen as appears in the nav bar (optional)
            passProps: {
                tenLoi: item.key
            }, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: 'green', borderWidth: 0.5,backgroundColor:'white',padding:10 }}
                    onChangeText={(keyword) => this.setState({ keyword })}
                    value={this.state.keyword}
                    onFocus = {()=>{ this.setState({keyword:''}) }}

                    />
                <Text>{this.state.keyword}</Text>
                <FlatList
                    data={this.state.mangData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { this.clickItem(item) } }>
                            <View style={styles.item}>
                                <Text>Hel lo màn hình {this.props.loaixe}- {item.key}-- {item.tuoi}</Text>
                            </View>
                        </TouchableOpacity>
                    )}


                    />
            </View>
        );
    }

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