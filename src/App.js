import React, {useState, useEffect} from 'react';
import './App.css';
import {DragDropContext} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";
import ToDoDroppable from './ToDoDroppable';
import Input from "./Input";

function App() {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo]= useState("");
  const [comment, setComment]= useState("");
  const [date, setDate]= useState("");
  const [percents, setPercents] = useState(
[0,0,0,0]
  );

  const [state, setState] = useState({
    "backlog": {
      title: "Backlog",
      items: [],
    },
    "todo": {
      title: "Todo",
      items: [],
    },
    "in-progress": {
      title: "In Progress",
      items: [],
    },
    "done": {
      title: "Completed",
      items: [],
    }
  })

 
  
  const handleTaskName = (taskName)=>{
      setTaskName(taskName.target.value);
  }
  const handleDueDate =(dueDate)=>{
      setDueDate(dueDate.target.value);
  }
  const handleAssignedTo = (assignedTo)=>{
    setAssignedTo(assignedTo.target.value);
}
const handleComment =(comment)=>{
    setComment(comment.target.value);
}

// useEffect(() => {
//     // var UserDate = document.getElementById("userdate").value;
//     // var ToDate = new Date();
      
//     // if (new Date(UserDate).getTime() <= ToDate.getTime()) {
//     //     alert("The Date must be Bigger or Equal to today date");
//     //     return false;
//     // }
//     // return true;
//     var timerID = setInterval( () =>     setDate(new Date()), 1000 );
//     console.log(date);
//   return function cleanup() {
//       clearInterval(timerID);
//     };
  
// }, );

useEffect(()=>{
  let total = 0;
  let values = _.map(state, (data,key)=>{
    let currCount = data.items.length;
    total+=currCount;
    return (currCount);
  });
  let percentages = values.map((v)=>{
    if(total!=0)
    {
      return v/total;
    }
    else{
      return v;
    }
  });
  console.log(percentages);
  setPercents(percentages);
  console.log(percentages);

},[state]);



 const handleDragEnd = ({destination, source}) => {
  if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    const itemCopy = {...state[source.droppableId].items[source.index]}

    setState(prev => {
      prev = {...prev}
      prev[source.droppableId].items.splice(source.index, 1)


      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  const addItem = () => {
    setState(prev => {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [
            {
              id: v4(),
              name: taskName,
              dueDate: dueDate,
              assignedTo: assignedTo,
              comment: comment
            },
            ...prev.todo.items
          ]
        }
      }
    })

    setTaskName("");
    setDueDate("");
    setAssignedTo("");
    setComment("");
  }

  return (
    <>
       
      <Input className="App" 
      handleTaskName={handleTaskName} handleDueDate={handleDueDate} handleAssignedTo={handleAssignedTo} handleComment={handleComment} 
      taskName={taskName} dueDate={dueDate} assignedTo={assignedTo} comment={comment}
      save={addItem}/>
      <br/>
    <div className="App">
   
      
      <DragDropContext className="ddcontext" onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return(
            <div key={key} className={"column"}>
              <h3>{data.title}</h3>
              <ToDoDroppable key={key} droppableId={key} data={data}></ToDoDroppable>
            </div>
          )
        })}
      </DragDropContext>
      <div className="hello">
        {percents}
              </div>
    </div>
    </>
  );
}

export default App;