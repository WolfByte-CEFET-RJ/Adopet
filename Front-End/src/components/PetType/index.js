import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import {
  Checked,
  Type,
} from './styles';

export default function PetType({name, onPress, value}) {
  const data = {
    dog:  {icon: 'dog', color:'#FF6F59', background: '#FFE9E6'},
    cat:  {icon: 'cat', color:'#33C0FF', background: '#E5F7FF'},
    plus: {icon: 'plus', color:'#FF9933', background: '#FFF2E5'}
  }

  return (
    <Type background={data[name].background} activeOpacity={0.9} onPress={onPress}>
      <FontAwesome5 name={data[name].icon} size={60} color={data[name].color}/>
      {value ? <Checked/> : <></>}
    </Type>
  );
}