import { fromJS, get, getIn, setIn} from 'immutable';
import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
})

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_POKEMONS: 
      return setIn(state, ['pokemons'], fromJS(action.payload))

    case SET_FAVORITES:
      const currentPokemonIndex = get(state, 'pokemons').findIndex(
        (pokemon) => pokemon.get('id') === action.payload.pokemonId
      )
    
      if( currentPokemonIndex < 0 ) return state;

      const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite']);
      return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);

    default:
      return state;
  }
}