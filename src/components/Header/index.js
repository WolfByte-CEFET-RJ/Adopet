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
      <Title>{props.title}</Title>
      <Strong
        margin={props.margin}
      >{props.strong}</Strong>

      <Description>{props.description}</Description>
    </TextInicial>
  );
}