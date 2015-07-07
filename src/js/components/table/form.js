/**
 * Created by AlexLiu on 2015/6/2.
 */

var React = require('react');
var Reflux = require('reflux');

var tableStore = require('../../stores/table-store');
var actions = require('../../actions/app-actions');

var Form =  React.createClass({
    mixins: [Reflux.connect(tableStore), Reflux.ListenerMixin],

    comopnentDidMount: function(){
      this.listenTo(actions.addItem, this.addItem);
    },



    render(){
        var form ;
        if(this.state.isAdding){
            form = (
                <div>
                    <p>name: <input /></p>
                    <p>stock: <input /></p>
                </div>
            );
        }else{
            return <div></div>
        }

    }
});

module.exports = Form;