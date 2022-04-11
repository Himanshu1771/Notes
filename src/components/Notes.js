import React from "react";

const Notes = (props) => {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    
      <div className="card mx-4 my-4  " style={{ width: "18rem", display:"inline-block "}}> 
        <div className="card-body ">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <button className="btn btn-warning " onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      
  );
};

export default Notes;

    