import {Navigation} from 'react-native-navigation';

import ManHinh1 from './ManHinh1';
import ManHinh2 from './ManHinh2';
import ManHinh3 from './ManHinh3';


export function registerScreens() {
  Navigation.registerComponent('example.ManHinh1', () => ManHinh1);
  Navigation.registerComponent('example.ManHinh2', () => ManHinh2);
  Navigation.registerComponent('example.ManHinh3', () => ManHinh3);
}

