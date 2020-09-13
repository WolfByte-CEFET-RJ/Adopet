import React from 'react';

import { Feather } from '@expo/vector-icons';

import {
  Page,
  Point,
  Points
} from './styles.js';

export default function ThreePoints(props) {
  return (
    <Page>
      <Points tamanho={props.points.length} >
        {props.points.map((point, index) => (
            point ?
              <Point key={index} background={props.color}/> :
              <Feather key={index} name='square' size={10} color={props.color} />
          )
        )}
      </Points>
    </Page>
  )
}