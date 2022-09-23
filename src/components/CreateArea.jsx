import React, {useState} from "react";

function CreateArea(props) {

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
        event.preventDefault();
    }

    return(
        <div>
            <form>
                <input 
                    name="title" 
                    onChange={handleChange} 
                    value={newNote.title} 
                    placeholder="Title" 
                    />
                <textarea 
                    name="content" 
                    onChange={handleChange} 
                    value={newNote.content} 
                    placeholder="Take a note..." 
                    rows="3" 
                    />
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );    
}

export default CreateArea;