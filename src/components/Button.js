// COMPONENTE BUTTON

const Button = ({ color, text, addTask }) => {
  return (
    <button 
      className='btn' 
      style={{ backgroundColor: color }}
      onClick={addTask}
    >
      { text }
    </button>
  )
}

export default Button