"use strict";
// NPM Dependencies ------------------------------------------------------------
import React        from 'react';
import Uuid         from 'uuid';
import { connect }  from 'react-redux';
import { setSearchAttribute } from '../actions';
// Internal Dependencies ------------------------------------------------------------
import requests from '../../src/requests/requests';
import localStorage from '../../src/localstorage/localstorage';
// Constant Dependencies -------------------------------------------------------


// React Class -----------------------------------------------------------------
var LoginPage = React.createClass({

// Lifecycles Functions
  getInitialState () {
    return {
      name:"",
      password:""
    };
  },

  componentDidMount: function () {
  },

// Storage Methods ------------------------


// Handler Methods ------------------------
  handleChangeName: function(event){
    this.setState({name: event.target.value});
  },
  handleChangePassword: function(event){
    this.setState({password: event.target.value});
  },
  LoginOrCreate: function(){
    let user = localStorage.localStorageGet(this.state.name);
    console.log(user);
    if(_.isUndefined(user)){
      localStorage.localStorageSet(this.state.name,JSON.stringify({password:this.state.password,favourites:{}}))
    }
    else{
      console.log(user);
      this.props.transitionTo(PREPAYMENT_URL+"/"+this.props.cartId);
    }
  },

// Toogle Methods ------------------------


// Search methods ------------------------


// ---- Render Methods -------------------
  render () {
    return (
      <div className="Musikki-Test">
        <label>Username:</label>
        <input
          type="text"
          placeholder={"e.g James Bond"}
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder={"password"}
          value={this.state.password}
          onChange={this.handleChangePassword}
        />
        <button onClick={this.LoginOrCreate}>GO</button>
      </div>
    )
  }

});

module.exports = LoginPage

