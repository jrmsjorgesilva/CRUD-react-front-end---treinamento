import { useState } from 'react'
import Vetor from './Vetor'


const Vetores = () => {

  const [vetores] = useState(
      [
          {
              id: 1,
              nome: "Michele",
              idade: 23,
              profissao: "Cabeleireira",
              empresa: "Cabelao SA"
          },
          {
            id: 2,
            nome: "Joao",
            idade: 43,
            profissao: "Mecanico",
            empresa: "Monta SA"
          },
          {
            id: 3,
            nome: "Ramoso",
            idade: 27,
            profissao: "Hotelaria",
            empresa: "Hoteu SA"
          },
          {
            id: 4,
            nome: "Giselle",
            idade: 19,
            profissao: "Estudante",
            empresa: "Colégio Ramoso"
          },
      ]
  )

  return (
    <div className='container'>
        {vetores.map((vetor) => (
            <Vetor key={vetor.id} vetor={vetor}/>
        ))}
    </div>
  )
}

export default Vetores