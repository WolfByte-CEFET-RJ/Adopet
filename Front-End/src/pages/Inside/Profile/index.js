import React from 'react';

import { Feather } from '@expo/vector-icons';
import ProfileBG from '../../../assets/images/Profile/ProfileBG.png'

import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import {
  Background,
  Container,
} from './styles';

export default function Profile() {
  const navigation= useNavigation();
  return(
    <Background source={ProfileBG}>
      <Container>
        <Feather
        name='chevron-left'
        size={26}
        color='#A1A1A1'
        onPress={() => {navigation.goBack()}}
        />

        <Text> Profile </Text>

      </Container>
    </Background>
  )

}