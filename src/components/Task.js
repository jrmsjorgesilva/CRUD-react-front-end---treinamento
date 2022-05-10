/// COMPONENT MINHA TAREFA PARA CADA ELEMENTO

const Task = ({ task }) => {
    // console.log(task)
  return (
    <div className='task'>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
        <small>{task.id}</small>
    </div>
  )
}

export default Task