import React from 'react';
import { Router,IndexRoute, browserHistory, Route } from 'react-router';

// Store imports and initializations
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'

import {default as rootReducer} from '../../src/reducers';
import { syncHistoryWithStore,routerMiddleware } from 'react-router-redux'
//import { App } from './components/App/App'

// Top-level components
var App                = require("./app");
var LoginPage          = require("../../src/js/LoginPage");
var MainPage          = require("../../src/js/MainPage");
var NotFound          = require("../../src/js/NotFound");

// Sync dispatched route actions to the history
const reduxRouterMiddleware = routerMiddleware(browserHistory);
const store = createStore(
  rootReducer,
  applyMiddleware(reduxRouterMiddleware)
)

const history = syncHistoryWithStore(browserHistory, store)

// -----------------------------------------------------------------------------

//
var router = (
  <Provider store={store}>
    <Router  history={history} >
      <Route  path="/"                              component={App}>
        <IndexRoute                                 component={MainPage} />
        <Route path="login"                         component={LoginPage} />
      </Route>
      <Route path="*"                               component={NotFound} />
    </Router>
  </Provider>
)

module.exports = history;
module.exports = router;