/**
 * Created by AlexLiu on 2015/6/2.
 */

var React = require('react');
var Reflux = require('reflux');

var tableStore = require('../../stores/table-store');
var actions = require('../../actions/app-actions');


var RemoveItem = React.createClass({
    render(){

        var clickHandler = actions.removeItem.bind(this, this.props.item);
        return (
            <span style={{marginLeft:'10px'}} onClick={this.props.click}>
            {this.props.text}
            </span>
        );
    },
    removeItem: function(){
        console.log('remove');
        debugger;
        //actions.removeItem.call(this, this.props.item);
    }
});

module.exports = RemoveItem;