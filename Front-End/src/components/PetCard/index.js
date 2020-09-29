import React from 'react';

import Collar from '../../assets/images/PetCard/collar.png';

import {
  AdoptedImage,
  AdoptedText,
  AdoptedView,
  Pet,
  PetImage,
  PetName,
} from './styles';

export default function PetCard({image, name, adopted}) {
  return(
    <Pet>
      <AdoptedView opacity={adopted}>
        <AdoptedImage source={Collar}/>
        <AdoptedText>Pet Adotado!</AdoptedText>
      </AdoptedView>
      <PetImage source={image} resizeMode='cover'/>
      <PetName>{name}</PetName>
    </Pet>
  );
}