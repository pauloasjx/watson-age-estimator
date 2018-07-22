import React from 'react'

import Konva from 'konva'
import { Group } from 'react-konva'

import Face from './face'

export default (props) => (
  <Group>
    {props.faces.map((face) => (
      <Face
        location={face.face_location}
        age={face.age}
        gender={face.gender}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      />
    ))}
  </Group>
)
