import PokemonList from "./PokemonList"
import { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonLists = () => {

  const [pokemonLists, setPokemonLists] = useState([]);

  // useEffect ativa o efeito de fetch do axios somente uma vez  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
        setPokemonLists(res.data.results.map(pokemonList => pokemonList.name))
      }, [])
  }, [])

  // function deletePokemon
  const deletePokemon = (pname) => {
    setPokemonLists(pokemonLists.filter((pokemonList) => pokemonList !== pname))
  }

  return (
    <div className='container'>
        {pokemonLists.map((pokemonList) => (
            <PokemonList key={pokemonList.name} pokemonList={pokemonList} deletePokemon={deletePokemon}/>
        ))}
    </div>
  )
}

export default PokemonLists