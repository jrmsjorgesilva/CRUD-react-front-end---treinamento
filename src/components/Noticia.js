import { FaTrash } from 'react-icons/fa'

const Noticia = ({ noticiaTitle, deleteNoticia }) => {
  return (
    <div className='task'>
        <h3>
            Titulo da noticia: {noticiaTitle}
            <FaTrash style={{ color: 'red' }} onClick={() => deleteNoticia(noticiaTitle)} />
        </h3>
    </div>
  )
}

export default Noticia