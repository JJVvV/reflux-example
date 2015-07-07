/**
 * Created by AlexLiu on 2015/6/2.
 */
/**
 * Created by AlexLiu on 2015/6/2.
 */

var React = require('react');
var Reflux = require('reflux');

var tableStore = require('../../stores/table-store');
var actions = require('.././app-actions');


var AddItem = React.createClass({
    render(){
        return (
            <button style={{marginTop:'10px'}} onClick={this.addItem}>
                add new product
            </button>
        );
    },
    addItem: function(){
        console.log('add');
       actions.addItem();
        //actions.removeItem.call(this, this.props.item);
    }
});

module.exports = AddItem;