import React from 'react';

import { Feather } from '@expo/vector-icons';

import {
  InfoText,
  CardInfo,
  InputImage,
  InputText
} from './styles';

export default function Info(props) {
  return (
    <>
      <InfoText>{props.text}</InfoText>
      <CardInfo>
        <InputImage>
          <Feather name={props.image} size={26} color='#F17808' />
        </InputImage>
        <InputText
          placeholder={props.placeholder}
          secureTextEntry={props.password? true : false}
        />
      </CardInfo>
    </>
  )
}
