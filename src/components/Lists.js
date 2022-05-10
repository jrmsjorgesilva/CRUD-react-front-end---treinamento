import List from './List'
import { useState } from 'react'

const Lists = () => {

  const [lists] = useState([
      {
          id: 1,
          categoria: "Pet Shop"
      },
      {
          id: 2,
          categoria: "Viagens"
      },
      {
          id: 3,
          categoria: "Cosméticos"
      },
  ])

  return (
    <div className='container'>
        {lists.map((list) => (
            <List key={list.id} list={ list } />
        ))}
    </div>
  )
}

export default Lists