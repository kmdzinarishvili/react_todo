import {Droppable} from "react-beautiful-dnd";
import ToDoDraggable from "./ToDoDraggable";


const ToDoDroppable = ({droppableId, data, date}) =>{


return (<Droppable key={droppableId} droppableId={droppableId}>
                {(provided) => {
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                      {data.items.map((el, index) => {
                        return(
                         <ToDoDraggable date= {date} key={index} el = {el} index ={index}></ToDoDraggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>)

            };

export default ToDoDroppable;