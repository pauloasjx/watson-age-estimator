import React, { Component } from 'react'

import Konva from 'konva'
import { Rect } from 'react-konva'

export default class Face extends Component{
  constructor(props) {
    super(props)
    this.state = {
      stroke: "red",
    }
  }

  onMouseEnter() {
    const { onMouseEnter, age, gender } = this.props

    onMouseEnter(age, gender)
    this.setState({
      ...this.state,
      stroke: "orange"
    })
  }

  onMouseLeave() {
    const { onMouseLeave } = this.props

    onMouseLeave()
    this.setState({
      ...this.state,
      stroke: "red"
    })
  }

  render() {

    const { stroke } = this.state
    const { location, strokeWidth } = this.props

    return (
      <Rect
        x={location.left}
        y={location.top}
        width={location.width}
        height={location.height}
        stroke={stroke}
        strokeWidth={strokeWidth}
        shadowBlur={20}
        cornerRadius={10}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      />
    )
  }
}
