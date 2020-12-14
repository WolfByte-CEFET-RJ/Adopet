import React from 'react';

import {
  ImageArea,
  UserImage,
  Info,
  TextArea,
  UserName,
  UserState,
} from './styles';

export default function UserInfo({name, image, uri, city, reverse}) {
  return (
    <Info reverse={reverse}>
      <TextArea>
        <UserName>{name}</UserName>
        <UserState>{city}</UserState>
      </TextArea>
      <ImageArea>
        <UserImage
          source={uri ? {uri: `https://drive.google.com/thumbnail?id=${uri}`} : image}
          resizeMode="cover"
        />
      </ImageArea>
    </Info>
  );
}