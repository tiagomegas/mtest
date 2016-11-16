var React = require("react");

var NotFound = React.createClass({

  //---------------------------------------------------------------------------
  // Render
  //---------------------------------------------------------------------------

  render: function () {
    return(
      <div className="NotFound">

        <div>
          <h2>Error 404.</h2>
          <h3>This page isn't real, it's a dream!</h3>
        </div>
      </div>
    );
  }
});

module.exports = NotFound;
