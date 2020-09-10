import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View
} from './styles';

export default function IHome() {
  const navigation= useNavigation();
  return(
    <View>
      <Feather
      name='chevron-left'
      size={26}
      color='#A1A1A1'
      onPress={() => {navigation.goBack()}}
      />

      <Text> CALMA RAPAZIADA </Text>
    </View>
  )

}