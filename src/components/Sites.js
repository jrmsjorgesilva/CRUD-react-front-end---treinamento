import Site from './Site'
import { useState } from 'react'

const Sites = () => {

  const [sites, setSites] = useState([
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

  //   DELETE SITES
  const deleteSite = (id) => {
      setSites(sites.filter((site) => site.id !== id))
  }

  return (
    sites.length > 0
        ) ? (
            <div className='container'>
                <h3>Minha lista de sites: </h3>
                {sites.map((site) => (
                    <Site key={site.id} site={site} deleteSite={deleteSite} />
                ))}
            </div>
        ) : (
            'Nenhum site para filtrar'
    )
}

export default Sites