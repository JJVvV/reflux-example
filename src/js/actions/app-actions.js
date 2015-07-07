/**
 * Created by AlexLiu on 2015/6/2.
 */

var Reflux = require('reflux');

var AppActions = Reflux.createActions([
    'addItem',
    'removeItem',
    'editItem',
    'loadPage'
]);

module.exports = AppActions;