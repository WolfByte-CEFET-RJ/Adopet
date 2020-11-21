import React from 'react';

import { FontAwesome } from '@expo/vector-icons';

import {
  Page,
  Point,
  Points
} from './styles';

export default function ThreePoints(props) {
  return (
    <Page>
      <Points tamanho={props.points.length} >
        {props.points.map((point, index) => (
            point ?
              <Point key={index} background={props.color} borderRadius={props.radius}/> :
              <FontAwesome key={index} name="circle" size={11} color="#D9D9D9" />
          )
        )}
      </Points>
    </Page>
  )
}