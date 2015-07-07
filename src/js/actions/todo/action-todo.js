/**
 * Created by AlexLiu on 2015/6/3.
 */

var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    "toggleItem",
    "toggleAllItems",
    "addItem",
    "removeItem",
    "clearCompleted",
    "editItem"
])

module.exports = TodoActions;