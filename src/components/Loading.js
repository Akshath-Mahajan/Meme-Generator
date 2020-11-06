import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { findByLabelText } from '@testing-library/react';
const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
)
function Loading() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default Loading
