/**
 * Created by AlexLiu on 2015/6/2.
 */

var React = require('react');
var Reflux = require('reflux');

var tableStore = require('../../stores/table-store');
var actions = require('../../actions/app-actions');
var Router = require('react-router');

var Link = Router.Link;
var EditItem = require('./edit-item');
var RemoveItem = require('./remove-item');

var Item = React.createClass({

    getInitialState: function(){
        return {

        }
    },

    componentDidMount(){
        //this.setState({});

       // this.listenTo(actions.editItem, this.onItemChange);
       //this.listenTo(actions.removeItem, this.onItemChange);
    },
    componentWillUnmount: function(){

    },

    render(){
        //<EditItem item={this.props.item} />


        return (
            <tr>
                <td><Link to="itemDetail" params={{itemId: this.props.item.id}}>{this.props.item.name}</Link></td>
                <td>{this.props.item.stock}</td>

                <td>
                    <div>

                        <RemoveItem item={this.props.item} text="remove" click={this.remove} />
                    </div>
                </td>
            </tr>
        );
    },
    remove: function(){
        actions.removeItem(this.props.item);
    },

    onItemChange: function(){

    }
});

module.exports = Item;