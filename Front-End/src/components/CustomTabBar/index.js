import React from 'react';

import { Feather } from '@expo/vector-icons';

import {
  TabView,
  TabItem
} from './styles';

export default function CustomTabBar({ state, navigation }) {

  function goTo(screenName) {
    navigation.navigate(screenName);
  }

  return (
    <TabView>
      <TabItem onPress={() => {goTo('IHome')}}>
        <Feather name={'home'} size={26} color={state.index === 0 ? '#F8A33A' : '#979797'}/>
      </TabItem >
      <TabItem onPress={() => {goTo('Chat')}}>
        <Feather name={'mail'} size={26} color={state.index === 1 ? '#F8A33A' : '#979797'}/>
      </TabItem>
      <TabItem onPress={() => {goTo('WantAdopt')}}>
        <Feather name={'users'} size={26} color={state.index === 2 ? '#F8A33A' : '#979797'}/>
      </TabItem>
      <TabItem onPress={() => {goTo('Profile')}}>
        <Feather name={'user'} size={26} color={state.index === 3 ? '#F8A33A' : '#979797'}/>
      </TabItem>
    </TabView>
  );
}