/**
 * Created by AlexLiu on 2015/6/2.
 */

var Reflux = require('reflux');
var request = require('superagent');
var _ = require('lodash');

var actions = require('../actions/loginActions');

var LoginStore = Reflux.createStore({
    listenables: [actions],
    init(){
        this.user = null;
        this.jwt = null;
    },

    onLoginUser: function(info){
        this.jwt = info.jwt;
        this.user = info.user;
        this.trigger(this.user);
    },

    onLogoutUser: function(){
        this.user = null;
        this.trigger(this.user);
    },

    isLoggedIn(){
        return !!this.user;
    }
});

export default LoginStore;