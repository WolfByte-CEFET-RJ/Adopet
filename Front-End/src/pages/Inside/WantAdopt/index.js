import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import {
  Container
} from './styles';

export default function WantAdopt() {
  const navigation= useNavigation();
  return(
    <Container>
      <Feather
      name='chevron-left'
      size={26}
      color='#A1A1A1'
      onPress={() => {navigation.goBack()}}
      />

      <Text> WantAdopt </Text>
    </Container>
  )

}