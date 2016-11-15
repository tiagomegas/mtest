import { combineReducers } from 'redux';
import userReducer from './userReducer';

import { routerReducer } from 'react-router-redux';

const leApp = combineReducers({
  userReducer,
  routing: routerReducer
});

export default leApp;
