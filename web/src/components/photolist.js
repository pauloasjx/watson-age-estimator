import React from 'react'

import { Grid,
         GridList,
         GridListTile,
         ListSubheader,
         Typography } from '@material-ui/core'


import Photo from './photo'

export default (props) => {

  const {photos} = props

  return (
    <div>
      {photos.length > 0 ? (
      <GridList cellHeight={180}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Last photos</ListSubheader>
          </GridListTile>
          {photos.map(photo => (
              <Photo src={photo.image}
                     faces={photo.faces}/>
          ))}
      </GridList>
      ) : (
      <Typography variant="title" color="inherit">
        {/* Tipografia removida */}
      </Typography>
    )}
    </div>
  )
}
