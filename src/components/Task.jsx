
function Task ({task, isTaskCompleted, deleteTask}) {
    return (
        <div className="card" >
            <h3 
                onClick={() => isTaskCompleted(task.id)} 
                style={task.completed ? {textDecoration: 'line-through'} : {}}>{task.text}</h3>
            <button type="button" onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    )
}

export default Task