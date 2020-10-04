import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import MemeInput from './MemeInput'
import axios from 'axios'
import Loading from './Loading'
import LazyLoad from 'react-lazyload';
const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor: theme.palette.background.default,
            flex: '1',
    },
  })
);

function MemeCreate() {
    let {name, id, boxes} = useParams();
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
        output = null;
    }else{
        output =
            <div style={{marginTop: 10}}>
                <LazyLoad placeholder={<Loading />}>
                    <img src={url} height={320} width={320} alt="meme"/>
                </LazyLoad>
            </div>
    }
    return (
        <div className={classes.root}>
            <Typography align="center" variant="h6" color="primary">Meme #{id} - {name}</Typography> 
            <div>{arr}</div>
            <Grid container justify = "center">
                <Button type="button" onClick={submit} variant="outlined" size="large"> Make Meme </Button>
            </Grid>
            <Grid container justify = "center">
                {output}
            </Grid>
        </div>
    )
}

export default MemeCreate
