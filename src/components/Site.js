import { FaTrash } from 'react-icons/fa' 

const Site = ({ site, deleteSite }) => {
  return (
    <div className='task'>
        <h3>{site.endereco}
          <FaTrash style={{ color: 'red' }} onClick={() => deleteSite(site.id)}/>
        </h3>
    </div>
  )
}

export default Site