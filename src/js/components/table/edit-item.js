/**
 * Created by AlexLiu on 2015/6/2.
 */

var React = require('react');
var Reflux = require('reflux');

var tableStore = require('../../stores/table-store');
var actions = require('../../actions/app-actions');



var EditItem = React.createClass({
    render(){

        return (
            <span onClick={this.editItem}>
                edit
            </span>
        );
    },
    editItem: function(){

        actions.editItem(this.props.item);
    }
});

module.exports = EditItem;