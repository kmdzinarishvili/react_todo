
import {Draggable} from "react-beautiful-dnd";


const ToDoDraggable = ({el, index, date}) => {

return(<Draggable key={el.id} index={index} draggableId={el.id}>
{(provided, snapshot) => {
  return(
    <div
      className={`item ${snapshot.isDragging && "dragging"}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {new Date(el.dueDate.split("-"))> date?<> 
            <Item className="myClass" key={el.id} name={el.name} dueDate={el.dueDate} assignedTo={el.assignedTo} comment={el.comment} ></Item>
            </>
            :<>
            <Item className="red" key={el.id} name={el.name} dueDate={el.dueDate} assignedTo={el.assignedTo} comment={el.comment} ></Item>
            </>
            }

    </div>
  )
}}
</Draggable>)
}

const Item = ({className, name, dueDate, assignedTo, comment}) =>{

    return (<div className ={className+" item"}>
        <h1>{name}</h1>
        <h2>{dueDate}</h2>
        <h3>{assignedTo}</h3>
        <h4>{comment}</h4>
    </div>);

};

export default ToDoDraggable;

