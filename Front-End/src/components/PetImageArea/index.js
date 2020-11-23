import React from 'react';

import {
  ImageText,
  ImagePet,
  ImageView
} from './styles';

export default function PetImageArea(props) {
  return (
    <ImageView onPress={props.onPress} main={props.main} activeOpacity={0.9}>
      {props.source ?
        <ImagePet source={props.source} resizeMode="cover" main={props.main}/> :
        <ImageText main={props.main}>Adicionar Foto</ImageText>
      }
    </ImageView>
  )
}