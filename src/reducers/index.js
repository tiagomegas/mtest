import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

import { routerReducer } from 'react-router-redux';

const leApp = combineReducers({
  searchReducer,
  userReducer,
  routing: routerReducer
});

export default leApp;
