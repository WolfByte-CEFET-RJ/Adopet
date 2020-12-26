import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const AppStack = createStackNavigator();
const Tab      = createBottomTabNavigator();

import CustomTabBar from './components/CustomTabBar';

import Home            from './pages/Outside/Home';
import Login           from './pages/Outside/Login';
import Register        from './pages/Outside/Register';
import RegisterOng     from './pages/Outside/RegisterOng';
import PasswordRecover from './pages/Outside/PasswordRecover';
import Tutorial        from './pages/Outside/Tutorial';


import IHome           from './pages/Inside/IHome';
import Chat            from './pages/Inside/Chat';
import DonateChat      from './pages/Inside/Chat/DonateChat';
import ChatInside      from './pages/Inside/InsideChat';
import WantAdopt       from './pages/Inside/WantAdopt';
import Profile         from './pages/Inside/Profile';
import PetList         from './pages/Inside/PetList';

import AddPet          from './pages/Inside/AddPet';
import PetProfile      from './pages/Inside/PetProfile';
import UserProfile     from './pages/Inside/UserProfile';
import RegisterPet     from './pages/Inside/RegisterPet';
import Config          from './pages/Inside/Config';
import AboutUs         from './pages/Inside/AboutUs';
import FeedBack        from './pages/Inside/FeedBack';

function MainTab() {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props}/>} >
      <Tab.Screen name="IHome" component={IHome} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="WantAdopt" component={WantAdopt} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="DonateChat" component={DonateChat} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator headerMode='none' initialRouteName='Home' screenOptions={{ headerShown: false}}>

        <AppStack.Screen name='DonateChat' component={DonateChat} />
        <AppStack.Screen name='ChatInside' component={ChatInside} />
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='Register' component={Register} />
        <AppStack.Screen name='RegisterOng' component={RegisterOng} />
        <AppStack.Screen name='PasswordRecover' component={PasswordRecover} />
        <AppStack.Screen name='Tutorial' component={Tutorial} />
        <AppStack.Screen name='MainTab' component={MainTab} />
        <AppStack.Screen name='PetList' component={PetList} />
        <AppStack.Screen name='PetProfile' component={PetProfile} />
        <AppStack.Screen name='UserProfile' component={UserProfile} />
        <AppStack.Screen name='RegisterPet' component={RegisterPet} />
        <AppStack.Screen name='Config' component={Config} />
        <AppStack.Screen name='AddPet' component={AddPet} />
        <AppStack.Screen name='AboutUs' component={AboutUs} />
        <AppStack.Screen name='FeedBack' component={FeedBack} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}