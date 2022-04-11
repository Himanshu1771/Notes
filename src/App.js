import { useState } from "react";
import "./App.css";
import Addnote from "./components/Addnote";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newnote) {
   
    setNotes((prevNotes) => {
      return [...prevNotes, newnote];
    });
  }
  function deleteNote(id){
    setNotes(prevNotes =>{
     return prevNotes.filter((items,index)=>{
      return index !== id
      })
  })
  }

  return (
    <>
      <Navbar />

      <Addnote onAdd={addNote} />

      {notes.map((items, index) => {
        return (   
          <Notes
            key={index}
            id={index}
            title={items.title}
            content={items.content}
            onDelete={deleteNote}
          />  
         
        );
      })}

      <Footer />
    </>
  );
}

export default App;
