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
var Item = React.createClass({

// Lifecycles Functions
  getInitialState: function () {
    return {
    };
  },

  getDefaultProps: function () {
    return {
      photo:"",
      name: "",
      id:"",
      favourite:false,
      onSetAsFavourite: function(){}
    };
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
      <div
        onClick={this.props.onSetAsFavourite.bind(null,this.props.id)}
        ref={"item-"+this.props.id}
        className="Musikki-Test-item">
        <div className="Musikki-Test-item-photo"
             style={{ backgroundImage: "url(" + this.props.photo +")" }} />
        <div className="Musikki-Test-item-name">{this.props.name}</div>
        <div className="Musikki-Test-item-fav"></div>
      </div>
    )
  }

});

export default Item;
