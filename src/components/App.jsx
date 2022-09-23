import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";
import CreateArea from "./CreateArea";


function App() {

    const [allNotes, setAllNotes] = useState([...notes]);

    function addNote(newNote) {
        setAllNotes(prevValue => {
            return [...prevValue, newNote];
        });
    }

    function deleteNote(id){
        setAllNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index!== id;
            })
        })

    }
    
    return (
    <div>
        <Header/>  
        <CreateArea onAdd={addNote} />
        {allNotes.map((note, index) => (
            <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
            />)
        )}
        
        <Footer />
    </div>)
}

export default App;