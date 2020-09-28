import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import MemeInput from './MemeInput'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor: theme.palette.background.default,
            height:'100vh'
    },
    imgContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
    }
  })
);

function MemeCreate() {
    let {id, boxes} = useParams();
    const classes = useStyles();
    const [textVals, _setTextVals] = useState(Array.apply(null, Array(parseInt(boxes))).map(function () {return ""}))
    const [url, setUrl] = useState(null)
    const setTextVals = (id, value)=>{
        let temp = [...textVals]
        temp[id] = value
        return _setTextVals(temp)
    }
    const submit = () =>  {
        var form = new FormData();
        form.append('username', 'akshath')
        form.append('password', 'akshath123')
        form.append('template_id', id)
        for(let i=0; i<boxes; i++){form.append(`boxes[${i}][text]`,textVals[i]);}
        axios({
            method: 'POST',
            url: 'https://api.imgflip.com/caption_image', 
            data: form,
            headers: {'Content-Type':'multipart/form-data'}
        }).then((response) => setUrl(response.data.data.url))
    };
    let arr = []
    for(let i = 0; i < parseInt(boxes); i++){arr.push(<MemeInput key={i} id={i} callback={setTextVals} />)}
    let output = ""
    if(url == null){
        output = 
        <React.Fragment>
            <Typography align="center" color='textPrimary' variant="h1">Meme #{id}</Typography> 
            <div>{arr}</div>
            <Grid container justify = "center">
                <Button type="button" onClick={submit} variant="outlined" size="large"> Make Meme </Button>
            </Grid>
        </React.Fragment>
    }else{
        output =
            <div className={classes.imgContainer}>
                <img src={url} style={{marginLeft:'auto', marginRight:'auto'}} alt="Please refresh the page" />
            </div>
    }
    return (
        <div className={classes.root}>
            {output}
        </div>
    )
}

export default MemeCreate
