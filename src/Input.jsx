import React, { useState } from "react";

const Input = ({handleAssignedTo, handleTaskName, handleDueDate, handleComment, save}) => {

    return (<>
    <input type="text" placeholder="Task Name" onChange={(tn)=>handleTaskName(tn)} />
    <input type="date" placeholder="Due Date" onChange={(dd)=>handleDueDate(dd)} />
    <input type="text" placeholder="Assigned To" onChange={(at)=>handleAssignedTo(at)} />
    <input type="text" placeholder="Commnet" onChange={(com)=>handleComment(com)} />
    <button onClick={save}>Save</button>
  </>
  );
};

const Item = () =>{

    return (<div>
        <h1>Item</h1>

    </div>);

};

export default Input;