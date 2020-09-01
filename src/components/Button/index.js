import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import {
  BtCreate,
  BtCreateText
} from './styles';

export default function Button(props) {
  return (
    <BtCreate
      onPress={props.onPress}
      width={props.width}
      height={props.height}
      radius={props.radius}
    >
      <LinearGradient
          colors={props.colors}
          style={{height: props.height ? props.height : 50,
                  width: props.width ? props.width : 300,
                  borderRadius: props.radius ? props.radius : 5,
                  justifyContent: 'center',
                  alignItems: 'center'}}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
        <BtCreateText>{props.text}</BtCreateText>
      </LinearGradient>
    </BtCreate>
  );
}