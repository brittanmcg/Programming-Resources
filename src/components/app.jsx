var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

var App = React.createClass({
    render: function(){
        return (
            <div className="page-wrap">
              <Header />
              <Footer />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('.howitworks-react-3-col-circle-icons'));

