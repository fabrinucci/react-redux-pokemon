import axios from 'axios';
const API = 'https://pokeapi.co/api/v2/';

export const getPokemons = async () => {
  try {
    const res = await axios.get(`${API}pokemon?limit=151`);
    return res.data.results;
  } catch (err) {
    return console.log(err);
  }
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const res = await axios.get(pokemon.url);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
}