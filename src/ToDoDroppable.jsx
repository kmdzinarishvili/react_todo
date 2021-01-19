import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import ToDoDraggable from "./ToDoDraggable";


const ToDoDroppable = ({droppableId, data}) =>{


return (<Droppable droppableId={droppableId}>
                {(provided) => {
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                      {data.items.map((el, index) => {
                        return(
                         <ToDoDraggable el = {el} index ={index}></ToDoDraggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>)

            };

export default ToDoDroppable;