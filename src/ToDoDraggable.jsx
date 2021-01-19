import {Draggable} from "react-beautiful-dnd";


const ToDoDraggable = ({el, index}) => {
return(<Draggable key={el.id} index={index} draggableId={el.id}>
{(provided, snapshot) => {
  return(
    <div
      className={`item ${snapshot.isDragging && "dragging"}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Item key={el.id} name={el.name} dueDate={el.dueDate} assignedTo={el.assignedTo} comment={el.comment}></Item>
    </div>
  )
}}
</Draggable>)
}

const Item = ({name, dueDate, assignedTo, comment}) =>{

    return (<div>
        <h1>{name}</h1>
        <h2>{dueDate}</h2>
        <h3>{assignedTo}</h3>
        <h4>{comment}</h4>

    </div>);

};

export default ToDoDraggable;

