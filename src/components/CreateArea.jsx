import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from "@material-ui/core";

function CreateArea(props) {

    const[isExpanded, setIsExpanded] = useState(false)

    const [newNote, setNewNote] = useState([{
        title:"",
        content: ""}]);

    function handleChange(event) {

        const {value, name} = event.target;

        setNewNote((prevValue) => {
            if (name === "title") {
                return {
                title: value,
                content: prevValue.content
                };
            } else if (name === "content") {
                return{
                title: prevValue.title,
                content: value
                };
                
            }
        });
    }

    function handleSubmit(event) {
        props.onAdd(newNote);
        setNewNote({
            title:"",
            content: ""})
        event.preventDefault();
    }

    function expand() {
        setIsExpanded(true);
    }

    return(
        <div>
            <form className="create-note">
                {isExpanded ? <input 
                    name="title" 
                    onChange={handleChange} 
                    value={newNote.title} 
                    placeholder="Title" 
                    />: null}
                <textarea 
                    name="content" 
                    onClick={expand}
                    onChange={handleChange} 
                    value={newNote.content} 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1}
                    />
                    <Zoom in={true}>
                        <Fab onClick={handleSubmit}>
                            <AddIcon />
                        </Fab>
                    </Zoom>
                
                
            </form>
        </div>
    );    
}

export default CreateArea;