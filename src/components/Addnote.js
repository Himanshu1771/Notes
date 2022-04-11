import React, { useState } from "react";

const Addnote = (props) => {

  const [note, setNote] = useState({
      title:"",
      content:""
  });



function handleChange(event){
    const {name,value} =event.target;
    setNote(prevNote =>{
        return{
        ...prevNote,
        [name]:value
    }  })
}

 function handleClick(event){
 
     props.onAdd(note)
   setNote({
    title:"",
    content:""
   })
    event.preventDefault();
 }




  return (
    <div className="container my-4" style={{ width: "26rem" }}>
      <form>
        <input name="title"   placeholder="Title"  value={note.title} onChange={handleChange} style={{ width: "24rem" }} />
        <textarea className="my-2"
          name="content"  style={{ width: "24rem" }}  value={note.content}  onChange={handleChange}
          id="textAreaExample1"
          rows="4"
        ></textarea>
        <button className="btn btn-warning " onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default Addnote;
