import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Loading from './Loading'
import LazyLoad from 'react-lazyload';
const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor: theme.palette.background.paper,
            margin: "25px 5px"
    },
    center: {
        marginLeft:'auto', 
        marginRight:'auto'
    },
    imgContainer: {
        height: '200px', 
        width:'200px',
    },
    img:{
        height:'100%',
        width: '100%',
    }
  })
);
function MemeTemplate(props) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <LazyLoad placeholder={<Loading />}>
                <Card className={classes.root}>
                    <Link to= {"/"+props.name+"/"+props.id+"/"+props.boxes}>
                    <CardActionArea>
                        <CardActions>
                            <CardContent className={`${classes.imgContainer} ${classes.center}`}>
                                <CardMedia className={`${classes.img} ${classes.center}`} image={props.imgUrl}/>
                            </CardContent>
                        </CardActions>
                    </CardActionArea>
                    </Link>
                </Card>
            </LazyLoad>
        </Grid>
    )
}

export default MemeTemplate
