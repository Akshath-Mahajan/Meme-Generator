import { makeStyles, Typography } from '@material-ui/core';
import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import MemeInput from './MemeInput'
const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor: theme.palette.background.default,
            height:'100vh'
    }
  })
);

function MemeCreate() {
    let {id, boxes} = useParams();
    const classes = useStyles();
    const [textVals, _setTextVals] = useState(Array.apply(null, Array(parseInt(boxes))).map(function () {return ""}))
    const setTextVals = (id, value)=>{
        let temp = [...textVals]
        temp[id] = value
        return _setTextVals(temp)
    }
    let arr = []
    for(let i = 0; i < parseInt(boxes); i++){
        arr.push(
            <MemeInput key={i} id={i} callback={setTextVals} />
            
        )
    }
    return (
        <div className={classes.root}>
            <Typography align="center" color='textPrimary' variant="h1">Meme #{id}</Typography> 
            {arr}
        </div>
    )
}

export default MemeCreate
