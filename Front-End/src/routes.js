import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const AppStack = createStackNavigator();
const Tab      = createBottomTabNavigator();

import CustomTabBar from './components/CustomTabBar';

import Home           from './pages/Outside/Home';
import Login          from './pages/Outside/Login';
import Register       from './pages/Outside/Register';
import RegisterOng    from './pages/Outside/RegisterOng';
import RegisterPerson from './pages/Outside/RegisterPerson';
import Tutorial1      from './pages/Outside/Tutorial1';
import Tutorial2      from './pages/Outside/Tutorial2';

import IHome          from './pages/Inside/IHome';
import Chat           from './pages/Inside/Chat';
import WantAdopt      from './pages/Inside/WantAdopt';
import Profile        from './pages/Inside/Profile';

function MainTab() {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props}/>}>
      <Tab.Screen name="IHome" component={IHome} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="WantAdopt" component={WantAdopt} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator headerMode='none' initialRouteName='Home' screenOptions={{ headerShown: false}}>

        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='Register' component={Register} />
        <AppStack.Screen name='RegisterOng' component={RegisterOng} />
        <AppStack.Screen name='RegisterPerson' component={RegisterPerson} />
        <AppStack.Screen name='Tutorial1' component={Tutorial1} />
        <AppStack.Screen name='Tutorial2' component={Tutorial2} />
        <AppStack.Screen name='MainTab' component={MainTab} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}