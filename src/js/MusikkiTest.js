"use strict";
// NPM Dependencies ------------------------------------------------------------
import React        from 'react';
import Uuid         from 'uuid';
import { connect }  from 'react-redux';
import { setSearchAttribute } from '../actions';
// Internal Dependencies ------------------------------------------------------------
import requests from '../../src/requests/requests';
import LocalStorage from '../../src/localstorage/localstorage';
// Component Dependencies -------------------------------------------------------

// Constant Dependencies -------------------------------------------------------


// React Class -----------------------------------------------------------------
var MusikkiTest = React.createClass({

// Lifecycles Functions
  getInitialState () {
    return {};
  },

  componentDidMount: function () {
  },

// Storage Methods ------------------------


// Handler Methods ------------------------


// Toogle Methods ------------------------


// Search methods ------------------------


// ---- Render Methods -------------------
  render () {
    return (
      <div className="Musikki-Test">
        <div>cenas</div>
      </div>
    )
  }

});

const mapStateToProps = state => ({
    search: state.searchReducer
  });

export default connect(mapStateToProps)(MusikkiTest);
