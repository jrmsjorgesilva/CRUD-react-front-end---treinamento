import { FaTimes } from 'react-icons/fa'

const PokemonList = ({ pokemonList }) => {
  return (
    <div className='task'>
        <h3>
            {pokemonList}
            <FaTimes style={{ color: 'red' }} />
        </h3>
    </div>
  )
}

export default PokemonList