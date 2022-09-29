import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Add';

function Note(props) {

    function handleClick(event) {
        props.onDelete(props.id);
        event.preventDefault();

    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
            <DeleteIcon />
        </button>
        
    </div>
}

export default Note;