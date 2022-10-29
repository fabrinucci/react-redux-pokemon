import { PokemonCard } from './PokemonCard';
import './PokemonList.css';

export const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
      {
        pokemons.map( pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon}/>
        ))
      }
    </div>
  )
}