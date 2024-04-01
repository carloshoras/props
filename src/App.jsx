import './App.css'
import {useState} from 'react'
import AddTaskForm from './components/AddTaskForm'
import Task from './components/Task'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (taskName) => {
    const newTask = {
      id:tasks.length+1,
      text:taskName,
      completed:false
    }
    setTasks([...tasks,newTask])
  }

  const deleteTask = (deleteId) => {
    setTasks(tasks.filter(task => task.id !== deleteId))
  }

  const isTaskCompleted = (idCompleted) => {
    setTasks(tasks.map(task => {
      return task.id === idCompleted ? {...task, completed:!task.completed} : task
    }))
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={addTask}/>
      <div className='cards'>
      {tasks.map(task => {
        return <Task key={task.id} task={task} isTaskCompleted={isTaskCompleted} deleteTask={deleteTask}/>
      })}
      </div>
    </>
  );
};

export default App;
