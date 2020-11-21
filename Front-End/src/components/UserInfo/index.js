import React from 'react';

import {
  ImageArea,
  UserImage,
  Info,
  TextArea,
  UserName,
  UserState,
} from './styles';

export default function UserInfo({name, city, image, reverse}) {
  return (
    <Info reverse={reverse}>
      <TextArea>
        <UserName>{name}</UserName>
        <UserState>{city}</UserState>
      </TextArea>
      <ImageArea>
        <UserImage source={image} resizeMode="cover"/>
      </ImageArea>
    </Info>
  );
}