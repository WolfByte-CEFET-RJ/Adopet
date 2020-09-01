import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home           from './pages/Outside/Home';
import Login          from './pages/Outside/Login';
import Register       from './pages/Outside/Register';
import RegisterOng    from './pages/Outside/RegisterOng';
import RegisterPerson from './pages/Outside/RegisterPerson';
import Tutorial1      from './pages/Outside/Tutorial1';
import Tutorial2      from './pages/Outside/Tutorial2';
import ForgetPassword from './pages/Outside/ForgetPassword';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator headerMode='none' initialRouteName='ForgetPassword' screenOptions={{ headerShown: false}}>

        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='Register' component={Register} />
        <AppStack.Screen name='RegisterOng' component={RegisterOng} />
        <AppStack.Screen name='RegisterPerson' component={RegisterPerson} />
        <AppStack.Screen name='Tutorial1' component={Tutorial1} />
        <AppStack.Screen name='Tutorial2' component={Tutorial2} />
        <AppStack.Screen name='ForgetPassword' component={ForgetPassword} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}