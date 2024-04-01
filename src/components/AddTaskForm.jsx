import {useState} from 'react'


function AddTaskForm ({addTask}) {
    const [inputTask, setInputTask] = useState("")
    return (
        <>
        <input type="text" onChange={(e) => setInputTask(e.target.value)}/>
        <button type="button" onClick={() => {addTask(inputTask)}}>Pica</button>
        </>
    )
}

export default AddTaskForm