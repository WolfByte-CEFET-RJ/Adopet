import React from 'react';

import {
  Description,
  TextInicial,
  Strong,
  Title
} from './styles';

export default function Header(props) {
  return(
    <TextInicial>
      <Title color={props.white}>{props.title}</Title>
      <Strong
        margin={props.margin}
        color={props.white}
      >{props.strong}</Strong>

      <Description color={props.white}>{props.description}</Description>
    </TextInicial>
  );
}