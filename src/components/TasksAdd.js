import { useState } from 'react'

const TasksAdd = ({ addTask }) => {

  // use state setting
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  //   functions metodos
  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleDay = (e) => {
    setDay(e.target.value)
  }

  const handleReminder = (e) => {
    setReminder(e.currentTarget.checked)
  }

  const onSubmit = (e) => {
      e.preventDefault();

      if (!text) {
          alert('add tasks');
          return
      }

      addTask({ text, day, reminder });

    //   limpar dados form apos chamar função
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input 
                value={text}
                onChange={(e) => handleText(e)}
                type="text"
                placeholder='Add task'
            />
        </div>
        <div className="form-control">
            <label htmlFor="">Day and Time</label>
            <input
                value={day}
                onChange={(e) => handleDay(e)}
                type="day"
                placeholder='Add a date'
            />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
                onChange={(e) => handleReminder(e)}
                value={reminder}
                checked={reminder}
                type="checkbox"
            />
        </div>
        <input className='btn btn-block' type="submit" value='Save Task' />
    </form>
  )
}

export default TasksAdd