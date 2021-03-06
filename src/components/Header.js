import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor:theme.palette.background.default,
            color: theme.palette.text.primary,
            paddingBottom: 20
        }
}))
function Header() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography align='center' variant="h1">
                Meme Creator
            </Typography>
            <Typography align='center' variant="h2">
                Create your own memes!
            </Typography>
        </div>
    )
}

export default Header
