import React from 'react';

import { Picker } from '@react-native-community/picker';

export default function CustomPicker(props) {
  return (
    <Picker style={{flex: props.flex, color:`${props.selectedValue === '0' ? '#BEBDC2' : '#000'}`}}
      selectedValue={props.selectedValue}
      onValueChange={props.onValueChange}
      enabled={props.enabled}
    >
      <Picker.Item label={props.name} value="0" />
      {props.values.map(item => (
        <Picker.Item key={item} label={item} value={item} />
      ))}
    </Picker>
  );
}