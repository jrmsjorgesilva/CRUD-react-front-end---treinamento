import List from './List'
import { useState } from 'react'

const Lists = () => {

  const [lists, setList] = useState([
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

//   DELETE LISTS
const deleteList = (id) => {
    setList(lists.filter((list) => list.id !== id))
}

  return (
      lists.length > 0) ? (
        <div className='container'>
            {lists.map((list) => (
                <List key={list.id} list={ list } deleteList={deleteList} />
            ))}
        </div>
      ) : (
        'Nenhuma lista a ser exibida'
  )
}

export default Lists