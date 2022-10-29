import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/lib/card/Meta';
import { FavoriteButton } from './FavoriteButton';
import { setFavorites } from '../actions/index';

export const PokemonCard = ({ pokemon }) => {

  const dispatch = useDispatch();
  
  const handleOnFavorite = () => {
    dispatch(setFavorites({ pokemonId: pokemon.id }));
  }

  return (
    <Card
      className='PokemonCard'
      title={ pokemon.name }
      cover={
        <img 
          src={pokemon.sprites.other.dream_world.front_default} 
          alt='Ditto' 
        />
      }
      extra={ <FavoriteButton isFavorite={pokemon.favorite} onClick={handleOnFavorite}/> }
    >
      <h4>Abilities:</h4>
    { pokemon.abilities.map( (poke, index) => (
        <div key={index}>
          <Meta description={poke.ability.name}/>
        </div>
      )
    )}
    </Card>
  )
}
