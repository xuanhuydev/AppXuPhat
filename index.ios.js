
import React, { Component } from 'react';
import {  AppRegistry} from 'react-native';
import App from './components/App.js'
export default class xphat extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('xphat', () => xphat);
