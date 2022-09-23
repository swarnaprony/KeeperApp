import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";


function App() {

    const [newNotes, setNewNotes] = useState([...notes]);
    const [recentNote, setRecentNote] = useState([{
        title:"",
        content: ""}]);

    function handleChange(event) {
        console.log("Changed")

       const {value, name} = event.target;

       setRecentNote((prevValue) => {
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
        event.preventDefault();
        console.log("Submitted")
        setNewNotes((prevNote) => {
            return [...prevNote, recentNote]
        })


    }

    return (
    <div>
        <Header/>  
            <form onSubmit={handleSubmit}>
                <h4>Add Title</h4>
                <div className="note">
                <input 
                    onChange={handleChange} 
                    type="text"
                    class="no-outline" 
                    placeholder="title" 
                    name="title"
                /><br></br>
                <input 
                    onChange={handleChange} 
                    type="text"
                    class="no-outline" 
                    placeholder="content" 
                    name="content" 
                /><br></br>
                <button class="no-outline" type="submit">Add</button>
            
            </div>
                
            </form> 

                        
        
        <div>
        {newNotes.map(note => (
            <Note
                key={note.key}
                title={note.title}
                content={note.content}
        />)

        )}

    </div>
        
        <Footer />
    </div>)
}

export default App;