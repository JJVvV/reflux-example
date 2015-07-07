/**
 * Created by AlexLiu on 2015/6/2.
 */

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var tableStore = require('../../stores/table-store');
var actions = require('../../actions/app-actions');

var Item = require('./item');
var Thead = require('./thead');
var RouteHandler = Router.RouteHandler;
var Items = React.createClass({
    //mixins: [Reflux.connect(tableStore), Reflux.ListenerMixin],

    componentDidMount(){
        //this.listenTo(actions.loadPage, this.refreshPage);
        //this.listenTo(actions.editItem, this.onItemsChange);
        //this.listenTo(actions.removeItem, this.onItemsChange);

        //actions.loadPage();
    },

    render(){

        var items = this.props.list.map((item, i) => {
            return <Item key={item.id} item={item} />
        });
        return (
            <table>
                <Thead />
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    },

    refreshPage: function(){

    },

    onItemsChange: function(){
        debugger;
        this.setState(tableStore.getData());
    }
});

module.exports = Items;