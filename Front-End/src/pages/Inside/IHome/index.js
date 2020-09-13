import React from 'react';

import IHomeBG from '../../../assets/images/IHome/IHomeBG.png'

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import {
  Background,
  Container,
} from './styles';

export default function IHome() {
  const navigation= useNavigation();
  return(
    <Background source={IHomeBG}>
      <Container>
        <Feather
        name='chevron-left'
        size={26}
        color='#A1A1A1'
        onPress={() => {navigation.goBack()}}
        />

        <Text> CALMA RAPAZIADA </Text>

      </Container>
    </Background>
  )
}