"use strict";
// NPM Dependencies ------------------------------------------------------------
import React        from 'react';
import Uuid         from 'uuid';
import { connect }  from 'react-redux';
import { setSearchAttribute } from '../actions';
import {browserHistory } from 'react-router';
// Internal Dependencies ------------------------------------------------------------
import requests from '../../src/requests/requests';
import localStorage from '../../src/localstorage/localstorage';
// Constant Dependencies -------------------------------------------------------
let users = {};

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
    users = localStorage.localStorageGet("users");
  },

// Storage Methods ------------------------


// Handler Methods ------------------------
  handleChangeName: function(event){
    this.setState({name: event.target.value});
  },

  handleChangePassword: function(event){
    this.setState({password: event.target.value});
  },

  Login: function(){
    localStorage.localStorageSet("userLogged", this.state.name);
    browserHistory.push("/");
  },

  LoginOrCreate: function(){
    //let user = localStorage.localStorageGet(this.state.name);

    // Check if user belongs to users object
    if(!_.isUndefined(users[this.state.name])){
      users[this.state.name].password === this.state.password ? this.Login() : alert('invalid password');
    }
    else{
      //Create user if not
      alert('New account created')
      users[this.state.name] = {password:this.state.password,favourites:{}};
      // Overwrite users object in localStorage
      localStorage.localStorageSet("users",users);
      this.Login();
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

