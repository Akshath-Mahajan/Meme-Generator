import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor: theme.palette.background.paper,
            margin: "25px 5px"
    },
    center: {
        marginLeft:'auto', 
        marginRight:'auto'
    },
    img: {
        height: '200px', 
        width:'200px'
    },
  })
);
function MemeTemplate(props) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardActions>
                        <CardContent className={classes.center}>
                            <CardMedia className={`${classes.img} ${classes.center}`} image={props.imgUrl}/>
                        </CardContent>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default MemeTemplate
