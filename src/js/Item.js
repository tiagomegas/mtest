"use strict";
// NPM Dependencies ------------------------------------------------------------
import React        from 'react';
// React Class -----------------------------------------------------------------
var Item = React.createClass({

// Lifecycles Functions

  getDefaultProps: function () {
    return {
      image:"",
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
