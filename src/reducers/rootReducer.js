import { combineReducers } from 'redux-immutable';
import { pokemonReducer } from './pokemon';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  data: pokemonReducer,
  ui: uiReducer
});

export default rootReducer;
