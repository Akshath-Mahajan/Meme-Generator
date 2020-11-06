import { Button, makeStyles, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { UserContext } from './context'

const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor:theme.palette.background.default,
            color: theme.palette.text.primary,
            paddingBottom: 20,
            display:'flex',
            flexDirection:'row',
            justifyContent:'center', 
            alignItems: 'center',
            [theme.breakpoints.down('xs')]:{
                flexDirection:'column'
            }
        },
    text:{
        flex:1,
    },
    btn: {
        height:'fit-content',
        [theme.breakpoints.down('xs')]:{
            height:'auto',
            width:'100%'
        }
    }    
}))

function Header() {
    const classes = useStyles()
    const [user, setUser] = useContext(UserContext)
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }
    return (
        <div className={classes.root}>
            <Typography className={classes.text} align='center' variant="h1">
                Meme Creator
            </Typography>
            {user?
            <Button variant="outlined" className={classes.btn} onClick={()=>logout()}>Logout</Button>
            :null}
        </div>
    )
}

export default Header
