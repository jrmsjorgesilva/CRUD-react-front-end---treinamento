import { FaTimes } from 'react-icons/fa'

const Info = ({ info, deleteInfo }) => {
  
  return (
    <div className='task'>
        <h3>{info.nome} <FaTimes style={{ color: 'red' }} onClick={() => deleteInfo(info.id)} /></h3>
    </div>
  )

}

export default Info