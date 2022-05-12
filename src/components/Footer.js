import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>copyright &copy; 2022</p>
        <Link to="https://jmsoftwares.com.br/">JM Softwares</Link>
        <br />
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer