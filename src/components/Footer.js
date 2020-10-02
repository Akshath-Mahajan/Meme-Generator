import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor:theme.palette.background.default,
            color: theme.palette.text.primary,
            paddingBottom: 20
        }
}))
function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography align='center' variant="subtitle1">
                Created by Akshath Mahajan. Hope you come up with some amazing memes!
            </Typography>
        </div>
    )
}

export default Footer
