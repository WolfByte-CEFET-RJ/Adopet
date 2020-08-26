import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import CreateAccountPerson from './pages/CreateAccountPerson';
import CreateAccountONG from './pages/CreateAccountONG';
import Login from './pages/Login';
import Inicial from './pages/Inicial';
import AfterCreate1 from './pages/AfterCreate1';
import AfterCreate2 from './pages/AfterCreate2';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator headerMode='none' initialRouteName='CreateAccountPerson' screenOptions={{ headerShown: false}}>

                <AppStack.Screen name='Home' component={Home} />
                <AppStack.Screen name='Inicial' component={Inicial} />
                <AppStack.Screen name='Login' component={Login} />
                <AppStack.Screen name='CreateAccountPerson' component={CreateAccountPerson} />
                <AppStack.Screen name='CreateAccountONG' component={CreateAccountONG} />
                <AppStack.Screen name='AfterCreate1' component={AfterCreate1} />
                <AppStack.Screen name='AfterCreate2' component={AfterCreate2} />

            </AppStack.Navigator>

        </NavigationContainer>
    );
}