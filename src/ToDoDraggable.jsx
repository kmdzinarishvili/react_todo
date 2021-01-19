import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";


const ToDoDraggable = ({el, index}) => {
return(<Draggable key={el.id} index={index} draggableId={el.id}>
{(provided, snapshot) => {
  console.log(snapshot)
  return(
    <div
      className={`item ${snapshot.isDragging && "dragging"}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {el.name}
      {el.dueDate}
      {el.assignedTo}
      {el.comment}
    </div>
  )
}}
</Draggable>)
}

const Item = () =>{

    return (<div>
        <h1>Item</h1>

    </div>);

};

export default ToDoDraggable;

