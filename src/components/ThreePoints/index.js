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
      <Points>
        {props.points.map(point => (
          point ?
            <Point background={props.color}/> :
            <Feather name='square' size={10} color={props.color} />
        ))}
      </Points>
    </Page>
  )
}