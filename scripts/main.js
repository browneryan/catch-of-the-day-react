var React = require('react');
var ReactDOM = require('react-dom');
/*
  Store Picker Component
  This will let us make <StorePicker/>
  */

var StorePicker = React.createClass({

    render : function() {
      return (
      <p>Hello World!</p>
    )
  }

});


ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
