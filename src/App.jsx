import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { getIn } from 'immutable';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { getPokemons } from './api';
import { getPokemonsWithDetails } from './actions';
import './App.css';
import logo from './assets/logo.svg'

const App = () => {

  const pokemons = useSelector(state => getIn(state, ['data', 'pokemons'], shallowEqual)).toJS();
  const loading = useSelector(state => getIn(state, ['ui', 'loading']));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    fetchPokemons();
  }, []);

  
  return (
    <div className='App'>
      <Col className='ColLogo' span={4} offset={10}>
        <img src={ logo } alt='Pokedex logo'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {
        loading && (
          <Col className='ColSpinner' offset={12}>
            <Spin spinning size='large'/>
          </Col>
        )
      }
      <PokemonList pokemons={pokemons} />
      

    </div>
  )
}

export default App;