var React = require('react');

var Footer = React.createClass({

  render: function() {
    return(
      <div className="footer footer--wrap container">
        <footer className="footer row row col-xs-12 col-lg-10">
          <ul>
            <li>Contact Us</li>
            <li>Legal Text</li>
            <li><a href="http://www.brittanmcginnis.com/about-me" target="_blank">Brittan McGinnis</a></li>
          </ul>
        </footer>
      </div>
    )
  }
});

module.exports = Footer;