import { Navigation } from 'react-native-navigation';
import {registerScreens} from './registerScreens.js'
registerScreens(); // this is where you register all of your app's screens




// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Xử Phạt',
      screen: 'example.TabXe', // this is a registered name for a screen
      icon: require('../img/one.png'),
      topTabs: [{
        screenId: 'example.XeMay',
        title: 'Xe Máy',
      }, {
        screenId: 'example.XeHoi',
        title: 'Xe Hơi',
      }],
      title: 'Loại xe'
    },
    {
      label: 'One',
      screen: 'example.XeHoi', // this is a registered name for a screen
      icon: require('../img/one.png'),
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.XeMay',
      icon: require('../img/two.png'),
      title: 'Screen Two'
    },
    {
      label: 'Two',
      screen: 'example.XeHoi',
      icon: require('../img/two.png'),
      title: 'Screen Two'
    }
  ]
});
