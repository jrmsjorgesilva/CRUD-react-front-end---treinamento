// COMPONENTE HEADER
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ autor, addTask, showAddTask }) => {
    const nameApp = "Task Tracker";
    return (
        <header className='header'>
            <h1>{nameApp}</h1>
            <p className='autor'>{autor}</p>
            <Button 
                color={showAddTask ? 'firebrick' : 'lime'} 
                text={showAddTask ? 'Recolher' : 'Adicionar'}
                addTask={addTask}
            />
        </header>
  )
}

// PROPDEFAULTS
Header.defaultProps = {
    autor: "Nome do App",
}

// PROPTYPES
Header.propTypes = {
    autor: PropTypes.string.isRequired,
}

// EXPORTAÇÃO
export default Header