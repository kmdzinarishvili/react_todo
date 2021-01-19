import React, {useState} from 'react';
import './App.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";
import ToDoDroppable from './ToDoDroppable';
import Input from "./Input";

// const item = {
//   id: v4(),
//   name: "Clean the house"
// }

// const item2 = {
//   id: v4(),
//   name: "Wash the car"
// }

function App() {
  const [taskName, setTaskName] = useState();
  const [dueDate, setDueDate] = useState();
  const [assignedTo, setAssignedTo]= useState();
  const [comment, setComment]= useState();
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
  const save= () =>{

  };
  const [text, setText] = useState("")
  const [state, setState] = useState({
    "todo": {
      title: "Todo",
      items: []
    },
    "in-progress": {
      title: "In Progress",
      items: []
    },
    "done": {
      title: "Completed",
      items: []
    }
  })

  const handleDragEnd = ({destination, source}) => {
    console.log(destination, source);
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
    <div className="App">
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={addItem}>Add</button>
      </div>
      <Input handleTaskName={handleTaskName} handleDueDate={handleDueDate} handleAssignedTo={handleAssignedTo} handleComment={handleComment} save={addItem}></Input>
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return(
            <div key={key} className={"column"}>
              <h3>{data.title}</h3>
              <ToDoDroppable droppableId={key} data={data}></ToDoDroppable>
            </div>
          )
        })}
      </DragDropContext>
    </div>
  );
}

export default App;