/**
 * Created by Administrator on 2015/7/1.
 */

import Reflux from 'reflux';
import Router from 'react-router';
//import RouterContainer from '../services/RouterContainer.js';
var RouterContainer = require('../services/RouterContainer');

var Actions = Reflux.createActions([
    'loginUser',
    'logoutUser'
]);

Actions.loginUser.preEmit = (info) =>{
    console.log(info);
    var savedJwt = localStorage.getItem('jwt');

    if(info.jwt && savedJwt !== info.jwt) {
        var nextPath = RouterContainer.get().getCurrentQuery() && RouterContainer.get().getCurrentQuery().nextPath || '/';
        localStorage.setItem('jwt', info.jwt);
        RouterContainer.get().transitionTo(nextPath);
    }

}

Actions.logoutUser.preEmit = () => {
    localStorage.removeItem('jwt');
    RouterContainer.get().transitionTo('/login');
}
export default Actions;

