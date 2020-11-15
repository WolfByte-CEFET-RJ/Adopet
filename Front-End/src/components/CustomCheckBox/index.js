import React from 'react';

import { CheckBox } from 'react-native';

import {
  CheckBoxItem,
  CheckBoxText
} from './styles';

export default function CustomCheckBox(props) {
  return (
    <CheckBoxItem>
      <CheckBox
        value={props.value}
        onValueChange={props.onValueChange}
      />
      <CheckBoxText>{props.text}</CheckBoxText>
    </CheckBoxItem>
  )
}