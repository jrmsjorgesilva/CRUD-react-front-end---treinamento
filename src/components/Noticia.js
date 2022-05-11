import { FaTrash } from 'react-icons/fa'

const Noticia = ({ noticiaTitle, noticiaContent, deleteNoticia }) => {
  return (
    <div className='task'>
        <h3>
            Titulo da noticia: {noticiaTitle}
            Conteudo: {noticiaContent}
            <FaTrash style={{ color: 'red' }} onClick={() => deleteNoticia(noticiaTitle)} />
        </h3>
    </div>
  )
}

export default Noticia