import { Navigation } from 'react-native-navigation';

import XeMay from './XeMay';
import XeHoi from './XeHoi';
import XeKhach from './XeKhach';
import XeTai from './XeTai';
import TabXe from './TabXe';
import ChiTiet from './ChiTiet'


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.XeMay', () => XeMay);
  Navigation.registerComponent('example.XeHoi', () => XeHoi);
  Navigation.registerComponent('example.XeKhach', () => XeKhach);
  Navigation.registerComponent('example.XeTai', () => XeTai);
  Navigation.registerComponent('example.TabXe', () => TabXe);
  Navigation.registerComponent('example.ChiTiet', () => ChiTiet);
}