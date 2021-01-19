
const Input = ({taskName, dueDate, assignedTo, comment, handleAssignedTo, handleTaskName, handleDueDate, handleComment, save}) => {

    return (<>
    <form>
    <input value={taskName}className="input" type="text" placeholder="Task Name" onChange={(tn)=>handleTaskName(tn)} required />
    <input value={dueDate} className="input" type="date" placeholder="Due Date" onChange={(dd)=>handleDueDate(dd)} />
    <input value={assignedTo} className="input" type="text" placeholder="Assigned To" onChange={(at)=>handleAssignedTo(at)} required/>
    <input value={comment}className="input" type="text" placeholder="Commnet" onChange={(com)=>handleComment(com)} required/>
    <button type="submit" className="save-btn" onClick={save}>Save</button>
    </form>
  </>
  );
};


export default Input;