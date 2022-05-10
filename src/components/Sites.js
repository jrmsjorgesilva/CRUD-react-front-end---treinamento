import Site from './Site'
import { useState } from 'react'

const Sites = () => {

  const [sites] = useState([
    {
        id: 1,
        endereco: 'dev.com.br'
    },
    {
        id: 2,
        endereco: 'devmedia.com.br'
    },
    {
        id: 3,
        endereco: 'dio.com.br'
    },
    {
        id: 4,
        endereco: 'javascript.com.br'
    },
    {
        id: 5,
        endereco: 'react.com.br'
    }
  ])

  console.log(sites)

  return (
    <div className='container'>
        <h3>Minha lista de sites: </h3>
        {sites.map((site) => (
            <Site key={site.id} site={site} />
        ))}
    </div>
  )
}

export default Sites