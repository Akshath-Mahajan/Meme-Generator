import { Button, Input, makeStyles, OutlinedInput } from '@material-ui/core'
import React, {useState, useContext} from 'react'
import { Redirect } from 'react-router-dom'
import { UserContext } from './context'
const useStyles = makeStyles((theme)=>({
    root:{
        flex: '1', display:'flex', flexDirection:'column', justifyContent:'space-evenly',
        backgroundColor:theme.palette.background.default,
    },
    input:{
        color: 'white'
    }
})
)
function Login() {
    const classes = useStyles()
    const [tempName, setTempName] = useState("")
    const [tempPw, setTempPw] = useState("")
    const [name, setName] = useContext(UserContext)
    const submitForm = () => {
        if(tempName==="akshath" && tempPw==="akshath"){
            localStorage.setItem('user', tempName);
            setName(tempName);
        }
    }
    return (
        name? <Redirect to={{pathname:"/"}}/>:
        <div className={classes.root}>
            <OutlinedInput placeholder="Username" value={tempName} onChange={(e) => setTempName(e.target.value)} type="text"/>
            <OutlinedInput placeholder="Password" value={tempPw} onChange={(e) => setTempPw(e.target.value)} type="password" />
            <Button variant="outlined" onClick={submitForm}> Submit </Button>
        </div>
    )
}

export default Login
