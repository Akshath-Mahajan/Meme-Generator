import React, {useState, useEffect} from 'react'
import MemeTemplate from './MemeTemplate'
import { Grid, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    root: {backgroundColor:theme.palette.background.default}
    })
);
function MemeTemplateGrid() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setData(data.data.memes))
    }, [])
    const classes = useStyles()
    return (
        <Grid container direction="row" 
        spacing={1}
        justify="center"
        alignItems="center"
        className={classes.root}>
            {data.map((item)=>(<MemeTemplate key={item.id} imgUrl={item.url}/>))}     
        </Grid>
    )
}

export default MemeTemplateGrid
