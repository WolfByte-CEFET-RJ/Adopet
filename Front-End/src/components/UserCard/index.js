import React from 'react';

import {
  UserAbout,
  UserButton,
  UserImage,
  UserName,
  UserText,
  UserTextArea,
} from './styles';

export default function UserCard(props) {
  return(
    <UserButton onPress={props.onPress} activeOpacity={.9}>
      <UserAbout
        colors={['#F99D47', '#FB7A2D80']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <UserImage source={props.image} resizeMode="cover"/>
        <UserTextArea>
          <UserName>{props.name}</UserName>
          <UserText>{props.text}</UserText>
        </UserTextArea>
      </UserAbout>
    </UserButton>
  );
}
