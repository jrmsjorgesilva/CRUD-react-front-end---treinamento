import PokemonList from "./PokemonList"
import { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonLists = () => {

  const [pokemonLists, setPokemonLists] = useState([]);

  // useEffect ativa o efeito de fetch do axios somente uma vez  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
        setPokemonLists(res.data.results.map(p => p.name))
      }, [])
  }, [])

  return (
    <div className='container'>
        {pokemonLists.map((pokemonList) => (
            <PokemonList key={pokemonList.name} pokemonList={pokemonList}/>
        ))}
    </div>
  )
}

export default PokemonLists