import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Button,
         GridList,
         GridListTile,
         GridListTileBar,
         ListSubheader,
         Typography } from '@material-ui/core'

import Konva from 'konva'
import { Stage,
         Layer,
         Image,
         Rect } from 'react-konva'

import FaceList from './face-list'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
})

class Photo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: '',
      faces: [],
      width: null,
      height: null,
      hover: false,
      gender: {},
      age: {}
    }
  }

  componentDidMount() {
    const image = new window.Image();
    const { faces, src } = this.props
    const { width, height } = image

    image.src = src
    image.onload = () => {
      this.setState({
        image,
        faces,
        width,
        height
      })
    }
  }

  onMouseEnter(age, gender) {
    console.log(age, gender)
    this.setState({
      ...this.state,
      hover: true,
      age,
      gender
    })
  }

  onMouseLeave() {
    this.setState({
      ...this.state,
      hover: false
    })
  }

  render() {
    const { image, faces, hover, gender, age } = this.state
    const { classes, handler } = this.props
    const { onMouseEnter, onMouseLeave } = this

    const scale = 350/image.height

    return (
        <GridListTile>
            <Stage width={image.width * scale}
                   height={image.height * scale}
                   scaleX={scale}
                   scaleY={scale}>
              <Layer>
                <Image image={image} />
              </Layer>
              <Layer>
                <FaceList faces={faces}
                          stroke="red"
                          strokeWidth={image.height/70}
                          onMouseEnter={onMouseEnter.bind(this)}
                          onMouseLeave={onMouseLeave.bind(this)}
                />
              </Layer>
            </Stage>
            {hover &&
            <GridListTileBar title={`Gender: ${gender.gender.toLowerCase()}`}
              subtitle={`Idade: ${age.min}-${age.max}`}
            />
            }
          </GridListTile>
    )
  }
}

export default withStyles(styles)(Photo)
