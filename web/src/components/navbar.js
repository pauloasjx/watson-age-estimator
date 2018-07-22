import React from 'react'

import { AppBar,
         IconButton,
         Toolbar,
         Tab,
         Tabs,
         Typography } from '@material-ui/core'

import GithubIcon from '../icons/Github';

export default () => {
    return(
        <div>
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="title" color="inherit">
                    Watson Age Estimator
                  </Typography>
                  <Tabs>
                    <Tab label="Home" />
                    <Tab label="About" />
                  </Tabs>
                  <IconButton>
                    <GithubIcon aria-haspopup="true"
                    color="white"/>
                  </IconButton>
              </Toolbar>
          </AppBar>
        </div>
    )
}
