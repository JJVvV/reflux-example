/**
 * Created by AlexLiu on 2015/6/4.
 */

var React = require('react');
var Reflux = require('reflux');

var Modal = React.createClass({
    render(){
        return (
        <div className="modal">
            {this.props.children}
        </div>
        );
    }
});

module.exports = Modal;