"use strict";
// NPM Dependencies ------------------------------------------------------------
import React        from 'react';
import Uuid         from 'uuid';
import { connect }  from 'react-redux';
import { setSearchAttribute } from '../actions';
import {browserHistory } from 'react-router'
import Autosuggest from 'react-autosuggest';
// Internal Dependencies ------------------------------------------------------------
import requests from '../../src/requests/requests';
import localStorage from '../../src/localstorage/localstorage';
import auth from '../../src/auth/auth';
// Redux Store  -------------------------------------------------------
import { setSession } from '../actions';
// Components -------------------------------------------------------
import Item from './Item';
// React Class -----------------------------------------------------------------
var MainPage = React.createClass({

// Lifecycles Functions
  getInitialState () {
    return {
      value: "",
      inputValue: "",
      suggestions: [],
      tab: 1
    };
  },

  componentDidMount: function () {
    //Check if user is logged. If not, redirects to login page
    if (!auth.loggedIn()) {
      browserHistory.push("/login");
    }
    else{
      console.log(localStorage.localStorageGet("userLogged"));
      this.props.dispatch(setSession(localStorage.localStorageGet("userLogged").name,localStorage.localStorageGet("userLogged").favourites));
    }
  },

  componentWillMount() {
    this.timer = null;
  },
// Storage Methods ------------------------

// Login Methods ------------------------
  logOut: function(){
    localStorage.localStorageDelete("userLogged");
    browserHistory.push("/login");
  },

// Handler Methods ------------------------
  select: function(id){
    console.log('clicked!'+id);
  },

// Toogle Methods ------------------------
  changeTab: function(value){
    this.setState({
      tab:value
    })
  },

  changeTabSearch: function(){
    this.changeTab(1);
  },

  changeFav: function(){
    this.changeTab(2);
  },


// Search methods ------------------------
  shouldRenderSuggestions:function(value) {
  return value.trim().length > 1;
  },

  setSuggestionsCallback: function(suggestions){
    console.log(suggestions);
    if(Array.isArray(suggestions)){
      this.setState({
        suggestions: suggestions
      });
    }

  },

  onSuggestionsFetchRequested: function(value){
    //avoid redundant calls with same inputvalue forced by component
    if(value.value!==this.state.inputValue.value){
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getSuggestions(value.value,this.setSuggestionsCallback),
          this.setState({
            inputValue: value
          });
      }, 500);
    }
  },

  onChange: function(event, {newValue}){
    this.setState({
      value: newValue
    });
  },

  renderSuggestion: function(suggestion){
    return(
      <Item
        onSetAsFavourite={this.select}
        id={suggestion.mkid}
        favourite={false}
        name={suggestion.name}
        photo={suggestion.image}
      />
    )
  },
  requestData: function(inputValue,inputLength,callback){
    requests.get('artists',{q:"[artist-name:"+inputValue+"]"})
      .then(function(response){
        callback(response.data.results.filter(band =>
          band.name.toLowerCase().slice(0, inputLength) === inputValue)
        );
      })
  },
  getSuggestions: function(value,callback){
    if(!_.isUndefined(value)){
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      inputLength === 0 ? [] : this.requestData(inputValue,inputLength,callback);
    }
  },

  // When suggestion is clicked, Autosuggest needs to populate the input element
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue: function(suggestion){
    return this.state.inputValue.value
  },

// ---- Render Methods -------------------
  render () {
  console.log(this.state.suggestions);
    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Type a band or artist',
      value: this.state.value,
      onChange: this.onChange
    };
    return (
      <div className="Musikki-Test">
        <button
         onClick={this.changeTabSearch}>Search</button>
        <button
        onClick={this.changeFav}>Favourites</button>
        <button
          onClick={this.logOut}
        >Logout</button>
        {//TODO make this a component
          this.state.tab === 1 &&
          <Autosuggest
            shouldRenderSuggestions={this.shouldRenderSuggestions}
            alwaysRenderSuggestions={true}
            focusInputOnSuggestionClick={false}
            suggestions={this.state.suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />}
      </div>
    )
  }

});

const mapStateToProps = state => ({
  search: state.searchReducer,
  user: state.userReducer
});

module.exports = connect(mapStateToProps)(MainPage);


