import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from './types';
import { getPokemonDetails } from '../api';

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
})

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
})

export const setFavorites = (payload) => ({
  type: SET_FAVORITES,
  payload
})

export const getPokemonsWithDetails = (pokemons = []) => 
  async (dispatch) => {
    dispatch(setLoading(true));
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
}