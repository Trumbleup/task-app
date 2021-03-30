import { useState } from "react";

const Task = ({ task }) => {
    const [currentTask, setCurrentTask] = useState(task);
    const [edit, setEdit] = useState(false);
    const editTask = (e) => {
        setCurrentTask(e.target.value)
    };
    const toggleEdit = () => {
        (edit) ? setEdit(false) : setEdit(true);
    };
    return (
        <>
            {(!edit) ? <div>{currentTask}</div> : <input onChange={editTask} value={currentTask}/>}
            <input type="submit" onClick={toggleEdit} />
        </>
    )
}

export default Task;