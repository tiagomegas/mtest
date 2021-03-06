"use strict";
// NPM Dependencies ------------------------------------------------------------
import React        from 'react';
import { connect }  from 'react-redux';
import {browserHistory } from 'react-router'
import Autosuggest from 'react-autosuggest';

// Internal Dependencies ------------------------------------------------------------
import requests from '../../src/requests/requests';
import localStorage from '../../src/localstorage/localstorage';
import auth from '../../src/auth/auth';

// Redux Store  -------------------------------------------------------
import { setSession, addFavourite,removeFavourite } from '../actions';

// Components -------------------------------------------------------
import Item from './Item';

// Constant Dependencies -------------------------------------------------------
let users = {};

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
      users = localStorage.localStorageGet("users");
      let user = localStorage.localStorageGet("userLogged");
      this.props.dispatch(setSession(user.name,user.favourites));
    }
  },

  componentWillMount() {
    this.timer = null;
  },
// Storage Methods ------------------------
  addToLocalStorage: function(favourite){
    // add favourite to both userLogged and users
    let tmpUser = {"name":this.props.user.name,"favourites":this.props.user.favourites.concat(favourite)};
    users[this.props.user.name].favourites = tmpUser.favourites;
    localStorage.localStorageSet("users",users);
    localStorage.localStorageSet("userLogged",tmpUser);
  },

  removeFromLocalStorage: function(favourite){
    // remove to both userLogged and users
    _.remove(this.props.user.favourites, function (favouriteElem) {
      return favouriteElem.id === favourite.id
    });
    let tmpUser = {"name":this.props.user.name,"favourites":this.props.user.favourites};
    users[this.props.user.name].favourites = tmpUser.favourites;
    localStorage.localStorageSet("users",users);
    localStorage.localStorageSet("userLogged",tmpUser);

  },
// Login Methods ------------------------
  logOut: function(){
    localStorage.localStorageDelete("userLogged");
    browserHistory.push("/login");
  },

// Handler Methods ------------------------
  //this function saves the selected favourite only if it isn't already a user's favourite
  select: function(favourite,isFavourite){
    if(!isFavourite){
      // add to store
      this.props.dispatch(addFavourite(favourite));
      // add to localstorage
      this.addToLocalStorage(favourite);
    }
    else{
      this.props.dispatch(removeFavourite(favourite))
      this.removeFromLocalStorage(favourite);
    }
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
    if(Array.isArray(suggestions)){
      this.setState({
        suggestions: suggestions
      });
    }
  },

  onSuggestionsFetchRequested: function(value){
    //avoid redundant calls with same inputvalue
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
    let favourite = _.some(this.props.user.favourites, function(favourite){
      return favourite.id === suggestion.mkid;
    });
    return(
      <Item
        key={"item-"+suggestion.mkid}
        onSetAsFavourite={this.select}
        id={suggestion.mkid}
        favourite={favourite}
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
  // based on the clicked suggestion.
  getSuggestionValue: function(suggestion){
    return this.state.inputValue.value
  },

// ---- Render Methods -------------------
  render () {
    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Type a band or artist',
      value: this.state.value,
      onChange: this.onChange
    };
    return (
      <div className="Musikki-Test">
        <button
         className="Musikki-Test-searchBtn"
         onClick={this.changeTabSearch}>Search</button>
        <button
          className="Musikki-Test-favouritesBtn"
          onClick={this.changeFav}>Favourites</button>
        <button
          className="Musikki-Test-logOutBtn"
          onClick={this.logOut}
        >Logout</button>
        <span className="Musikki-Test-userSession">{"Hello "+this.props.user.name+" !"}</span>
        {
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
          {
          this.state.tab === 2 &&
          <ul>
            {this.props.user.favourites.map(function(favourite){
            return(
            <Item
              key={"item-favourite-"+favourite.id}
              onSetAsFavourite={this.select}
              id={favourite.id}
              favourite={true}
              name={favourite.name}
              photo={favourite.image}
            />
          )}.bind(this))}
          </ul>}
      </div>
    )
  }
});

const mapStateToProps = state => ({
  search: state.searchReducer,
  user: state.userReducer
});

module.exports = connect(mapStateToProps)(MainPage);


