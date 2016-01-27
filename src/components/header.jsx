var React = require('react');

var Header = React.createClass({

  render: function() {
    return(
      <div className="header header--wrap container">
        <header className="header row col-xs-12 col-lg-10">
          <h1 className="header-headline">Programming Resources</h1>
        </header>
      </div>
      )
  }

});

module.exports = Header;