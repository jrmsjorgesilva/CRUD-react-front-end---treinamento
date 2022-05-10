// COMPONENTE HEADER
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ autor }) => {
    const nameApp = "Task Tracker";
    return (
        <header className='header'>
            <h1>{nameApp}</h1>
            <p className='autor'>{autor}</p>
            <Button color='lime' text='Add' />
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