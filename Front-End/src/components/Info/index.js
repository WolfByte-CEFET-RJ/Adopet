import React from 'react';

import { Feather } from '@expo/vector-icons';

import {
  CardInfo,
  InputImage,
  InputText
} from './styles';

export default function Info(props) {
  return (
    <>
      <CardInfo>
        <InputImage>
          <Feather name={props.image} size={26} color={props.focus ? 'red' : props.color} />
        </InputImage>
        <InputText
          placeholder={props.placeholder}
          secureTextEntry={props.password}
          maxLength={props.length}
          onValueChange={props.onValueChange}
          onChangeText={props.onChangeText}
          defaultValue={props.defaultValue}
          multiline={props.multiline}
          keyboardType={props.numeric ? 'numeric' : 'default'}
        />
      </CardInfo>
    </>
  )
}
