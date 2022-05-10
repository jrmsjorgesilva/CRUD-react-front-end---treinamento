// import { useState } from 'react'
import Info from './Info'
import { useState } from 'react'

const Infos = () => {

// declaração do hook state com array infos
const [infos, setInfos] = useState([
  {
      id: 1,
      nome: "Jorge",
      idade: 23
  },
  {
      id: 2,
      nome: "Manoela",
      idade: 53
  },
  {
      id: 3,
      nome: "Patricia",
      idade: 43
  },
  {
    id: 4,
    nome: "Noemi",
    idade: 32
  },
])

// DELETE INFOS
const deleteInfo = (id) => {
  setInfos(infos.filter((info) => info.id !== id))
}
    
  return (
    infos.length > 0) ? (
      <div className='container'>
          {infos.map((info) => (
              <Info key={info.id} info={ info } deleteInfo={deleteInfo} />
          ))}
      </div>
    ) : (
      'Nenhuma informação nos campos'
  )
}

export default Infos