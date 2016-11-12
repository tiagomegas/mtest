import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import { routerReducer } from 'react-router-redux';

const leApp = combineReducers({
  searchReducer,
  routing: routerReducer
});

export default leApp;
