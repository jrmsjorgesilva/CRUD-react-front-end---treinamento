

const Vetor = ({ vetor }) => {

  return (
    <div className='task'>
        <h3>{vetor.nome}</h3>
        <h6>{vetor.idade}</h6>
        <p>{vetor.profissao}</p>
        <p>{vetor.empresa}</p>
    </div>
  )
}

export default Vetor