import React from 'react';

import { Feather } from '@expo/vector-icons';
import ListBG from '../../../assets/images/ListBG/ListBG.png'

import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import {
  Background,
  Container,
} from './styles';

export default function WantAdopt() {
  const navigation= useNavigation();
  return(
    <Background source={ListBG}>
      <Container>
        <Feather
        name='chevron-left'
        size={26}
        color='#A1A1A1'
        onPress={() => {navigation.goBack()}}
        />

        <Text> WantAdopt </Text>

      </Container>
    </Background>
  )

}