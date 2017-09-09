import { Navigation } from 'react-native-navigation';
import ManHinh1 from './ManHinh1';
import ManHinh2 from './ManHinh2';
import ManHinh3 from './ManHinh3';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.ManHinh1', () => ManHinh1);
  Navigation.registerComponent('example.ManHinh2', () => ManHinh2);
   Navigation.registerComponent('example.ManHinh3', () => ManHinh3);

}

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
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
      label: 'One',
      screen: 'example.ManHinh1', // this is a registered name for a screen
      icon: require('../img/one.png'),
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.ManHinh2',
      icon: require('../img/two.png'),
      title: 'Screen Two'
    },
    {
      label: 'Two',
      screen: 'example.ManHinh2',
      icon: require('../img/two.png'),
      title: 'Screen Two'
    }
  ]
});
