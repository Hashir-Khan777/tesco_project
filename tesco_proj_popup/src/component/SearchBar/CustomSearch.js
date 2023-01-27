import React from 'react'
import { TextField,Grid } from '@mui/material'

const CustomSearch = ({
    labelFst,
    lableSnd,
    lableThd,
    requestGeneratedSearch,
    requestTopicSearch,
    requestInstructorSearch
}) => {
  return (
    <Grid container spacing={2}>
          <Grid item>
          <TextField
         id="fullWidth"
         label={labelFst}
         onChange={(searchVal)=>requestTopicSearch(searchVal.target.value)}
       
         />
          </Grid>
          <Grid item>
          <TextField
         id="fullWidth"
         label={lableSnd}
         onChange={(searchVal)=>requestInstructorSearch(searchVal.target.value)}
       
         />
          </Grid>

          <Grid item>
          <TextField
         id="fullWidth"
         label={lableThd}
         onChange={(searchVal)=>requestGeneratedSearch(searchVal.target.value)}
       
         />
          </Grid>

        </Grid>
  )
}

export default CustomSearch