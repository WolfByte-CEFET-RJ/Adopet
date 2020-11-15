import React from 'react';

import {
  InputView,
  InputText
} from './styles';

export default function CustomInput(props) {
  return (
    <>
      <InputView
          useLeft={props.left}
      >
        <InputText
          placeholder={props.placeholder}
          secureTextEntry={props.password}
          maxLength={props.length}
          onValueChange={props.onValueChange}
          onChangeText={props.onChangeText}
          defaultValue={props.defaultValue}
          multiline={props.multiline}
          keyboardType={props.numeric ? 'numeric' : 'default'}
        />
      </InputView>
    </>
  )
}