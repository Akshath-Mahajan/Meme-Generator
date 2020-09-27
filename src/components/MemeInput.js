import { TextField } from '@material-ui/core';
import React from 'react'
function MemeInput(props) {
    const handleChange = (event) => {
        props.callback(props.id, event.target.value)
    };
    return (
            <TextField
                id={props.id.toString()}
                multiline
                label="Enter some meme text"
                rows={4}
                fullWidth
                onChange={handleChange}
                variant="outlined"
                margin="dense"
            />
    )
}

export default MemeInput
