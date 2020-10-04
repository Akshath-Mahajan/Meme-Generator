import React, {useState, useEffect} from 'react'
import MemeTemplate from './MemeTemplate'
import { Grid, makeStyles } from '@material-ui/core';
import ReactPaginate from 'react-paginate'
import '../css/pagination.css'
const useStyles = makeStyles((theme)=>({
    root: {backgroundColor:theme.palette.background.default}
    })
);
function MemeTemplateGrid() {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [memesPerPage] = useState(10);
    const classes = useStyles()
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setData(data.data.memes))
    }, []);
    const handlePageClick = (e) => {
        const selectedPage = e.selected + 1; //starts at 0 in ReactPaginate
        setCurrentPage(selectedPage);
    }
    const last = currentPage * memesPerPage;
    const first = last - memesPerPage;
    const currentData = data.slice(first, last);
    return (
        <div className={classes.root}>
            <ReactPaginate 
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={Math.ceil(data.length/memesPerPage)}
            breakClassName={"break-me"}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            activeClassName={"active"}
            />
            <Grid container direction="row" 
            spacing={1}
            justify="center"
            alignItems="center">
                {currentData.map((item)=>(<MemeTemplate key={item.id} imgUrl={item.url} boxes={item.box_count} id={item.id} name={item.name}/>))}     
            </Grid>
            
        </div>
    )
}

export default MemeTemplateGrid
