// SCSS
require('../../src/stylesheets/musikkitest.scss');

var React               = require("react")
  , classnames          = require("classnames")
  , request             = require("../../src/requests/requests")
  , localStorage        = require("../../src/localstorage/localstorage")
  , _                   = require('lodash')

var App = React.createClass({

  getInitialState: function(){
    return {

    }
  },

  componentWillMount: function(){
    if(_.isUndefined(localStorage.localStorageGet("users"))){
      localStorage.localStorageSet("users",{});
    }
  },

  render: function () {

    return (
      <div className={'Item'}>
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
