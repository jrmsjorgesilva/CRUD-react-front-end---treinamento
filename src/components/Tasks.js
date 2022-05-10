// COMPONENTE TASKS
import Task from './Task'

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
    // console.log(tasks)
  return (
    <div className='container'>
        {tasks.map((task) => (
            <Task key={ task.id } task={task} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
        ))}
    </div>
  )
}

export default Tasks