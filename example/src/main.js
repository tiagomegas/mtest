import React from 'react';
import { render } from 'react-dom';
import Router from './router'

//const store = createStore(reducer);
let rootElement = document.getElementById('musikkiTest');

render(
  Router,
  rootElement
);
