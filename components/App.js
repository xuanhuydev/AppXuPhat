import { Navigation } from 'react-native-navigation';
import { registerScreens } from './registerScreens.js'
registerScreens(); // this is where you register all of your app's screens


const tabs = [
  {
    label: 'Xu Phat',
    screen: 'example.ManHinh1', // this is a registered name for a screen
    icon: require('../img/one.png'),
    topTabs: [{
      screenId: 'example.ManHinh1',
      title: 'Tab One',
    }, {
      screenId: 'example.ManHinh2',
      title: 'Tab Two',
    }],
    title: 'Screen One'
  },
  {
    label: 'Saved',
    screen: 'example.ManHinh1', // this is a registered name for a screen
    icon: require('../img/one.png'),
    title: 'Screen One'
  },
  {
    label: 'Ads',
    screen: 'example.ManHinh2',
    icon: require('../img/two.png'),
    title: 'Screen Two'
  },
  {
    label: 'More',
    screen: 'example.ManHinh2',
    icon: require('../img/two.png'),
    title: 'Screen Two'
  }
]

// start the app
Navigation.startTabBasedApp({
  tabs,
});
