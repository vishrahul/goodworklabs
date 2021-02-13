import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DashboardScreen from './src/screens/dashboard';
import NotificationScreen from './src/screens/notifications';


const RootStack = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    
    Notificaions: NotificationScreen,
  },
  {
    initialRouteName: 'Dashboard',
  },

  
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}



