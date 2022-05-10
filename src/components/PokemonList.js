import { FaTimes } from 'react-icons/fa'

const PokemonList = ({ pokemonList, deletePokemon }) => {
  return (
    <div className='task'>
        <h3>
            {pokemonList}
            <FaTimes style={{ color: 'red' }} onClick={() => deletePokemon(pokemonList)} />
        </h3>
    </div>
  )
}

export default PokemonList