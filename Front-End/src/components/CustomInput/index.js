import React from 'react';

import {
  InputView,
  InputText
} from './styles';

export default function Info(props) {
  return (
    <>
      <InputView>
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