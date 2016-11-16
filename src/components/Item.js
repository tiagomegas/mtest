"use strict";
// NPM Dependencies ------------------------------------------------------------
import React        from 'react';

// React Class -----------------------------------------------------------------
var Item = React.createClass({

// Lifecycles Functions
  propTypes: {
    image: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.number,
    favourite: React.PropTypes.bool,
    onSetAsFavourite: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      image:"",
      name: "",
      id:"",
      favourite:false,
      onSetAsFavourite: function(){}
    };
  },


// ---- Render Methods -------------------
  render () {
    return (
      <div
        onClick={this.props.onSetAsFavourite.bind(null,
          {
          id:this.props.id,
          name:this.props.name,
          image: this.props.photo
          },
          this.props.favourite)}
        className="Musikki-Test-item">
        <div className="Musikki-Test-item-photo"
             style={{ backgroundImage: "url(" + this.props.photo +")" }} />
        <div className="Musikki-Test-item-name">{this.props.name}</div>
        {this.props.favourite && <div className="Musikki-Test-item-fav"><i className="fi-check"></i></div>}
      </div>
    )
  }

});

export default Item;
