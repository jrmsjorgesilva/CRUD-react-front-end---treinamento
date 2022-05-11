import List from './List'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Lists = () => {

const [lists, setLists] = useState([])

// chamada axios da API
useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
        setLists(res.data.results.map(list => list.name))
    }, [])
}, [])

//   DELETE LISTS
const deleteList = (name) => {
    setLists(lists.filter((list) => list !== name))
}

  return (
      lists.length > 0) ? (
        <div className='container'>
            {lists.map((list) => (
                <List key={list.name} list={ list } deleteList={deleteList} />
            ))}
        </div>
      ) : (
        'Nenhuma lista a ser exibida'
  )
}

export default Lists