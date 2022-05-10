import { FaTrash } from 'react-icons/fa'

const Vetor = ({ vetor, deleteVetor }) => {

  return (
    <div className='task'>
        <h3>{vetor.nome}
          <FaTrash style={{ color: 'red' }} onClick={() => deleteVetor(vetor.id)} />
        </h3>
        <h6>{vetor.idade}</h6>
        <p>{vetor.profissao}</p>
        <p>{vetor.empresa}</p>
    </div>
  )
}

export default Vetor