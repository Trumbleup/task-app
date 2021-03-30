import Task from "./Task";

function Overview ({ allTasks }) {
    return (
        <div>
        {allTasks.map((task, index) => {
            return (
                <Task key={index} task={task}/>
            )
        })}
        </div>
    )  
}

export default Overview;