// Styles SCSS require
require('../../src/stylesheets/musikkitest.scss');

var React               = require("react")
  , localStorage        = require("../../src/localstorage/localstorage")
  , _                   = require('lodash')

var App = React.createClass({

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
