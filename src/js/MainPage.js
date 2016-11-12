"use strict";
// NPM Dependencies ------------------------------------------------------------
import React        from 'react';
import Uuid         from 'uuid';
import { connect }  from 'react-redux';
import { setSearchAttribute } from '../actions';
// Internal Dependencies ------------------------------------------------------------
import requests from '../../src/requests/requests';
import LocalStorage from '../../src/localstorage/localstorage';
import auth from '../auth'
// Constant Dependencies -------------------------------------------------------


// React Class -----------------------------------------------------------------
var LoginPage = React.createClass({

// Lifecycles Functions
  getInitialState () {
    return {};
  },

  componentDidMount: function () {
    //FIXME: Find a better way
    if (!auth.loggedIn()) {
      this.props.history.push("/");
    } else {
      this.getData("profile");
    }
  },
// Storage Methods ------------------------


// Handler Methods ------------------------


// Toogle Methods ------------------------


// Search methods ------------------------


// ---- Render Methods -------------------
  render () {
    return (
      <div className="Musikki-Test">

      </div>
    )
  }

});

const mapStateToProps = state => ({
  search: state.searchReducer
});

export default connect(mapStateToProps)(LoginPage);


