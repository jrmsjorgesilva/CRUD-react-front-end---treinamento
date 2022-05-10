/// COMPONENT MINHA TAREFA PARA CADA ELEMENTO
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, deleteTask, toggleReminder }) => {
    console.log(task)
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
        <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(task.id)} /></h3>
        <p>{task.day}</p>
        <small>{task.id}</small>
    </div>
  )
}

export default Task