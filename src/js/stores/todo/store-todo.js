/**
 * Created by AlexLiu on 2015/6/3.
 */

var Reflux = require('reflux');

var TodoActions = require('.././todo/action-todo');
var TodoStore = Reflux.createStore({
    listenables:[TodoActions],

    onEditItem(itemKey, newLabel){
        var foundItem = getItemByKey(this.list, itemKey);
    }
});

module.exports = TodoActions;