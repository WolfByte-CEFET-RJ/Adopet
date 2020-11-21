import React from 'react';

import {
  Header,
  UserImage,
  UserInfo,
  UserName,
  UserCity
} from './styles';

export default function HeaderConfig(props) {
  return (
    <Header activeOpacity={1} onPress={props.onPress}>
      <UserImage source={props.image}/>
      <UserInfo>
        <UserName>{props.name}</UserName>
        <UserCity>{props.city}</UserCity>
      </UserInfo>
    </Header>
  );
}