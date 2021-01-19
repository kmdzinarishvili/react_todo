import React, { useState } from "react";

const Input = () => {
    //create state for all parts
    
    const [taskName, setTaskName] = useState();
    const [dueDate, setDueDate] = useState();
    const handleTaskName = (taskName)=>{
        setTaskName(taskName.target.value);
    }
    const handleDueDate =(dueDate)=>{
        setDueDate(dueDate.target.value);
    }
    const save= () =>{

    };
    return (<>
    <input type="text" placeholder="Task Name" onChange={(tn)=>handleTaskName(tn)} />
    <input type="date" placeholder="Due Date" onChange={(dd)=>handleTaskName(dd)} />
    <input type="text" placeholder="Assigned To" onChange={(tn)=>handleTaskName(tn)} />
    <input type="text" placeholder="Commnet" onChange={(tn)=>handleTaskName(tn)} />
    <button onClick={save}>Save</button>
  </>
  );
};

const Item = () =>{

    return (<div>
        <h1>Item</h1>

    </div>);

};

const Form = ({list, setList}) => {

  const onAddBtnClick = event => {
    setList(list.concat(<Item  key={list.length} />));
  };

  return (
    <div>
      <Input></Input>
      {list}
    </div>
  );
};
export default Form;