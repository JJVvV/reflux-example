/**
 * Created by Administrator on 2015/6/30.
 */


import when from 'when';
var request = require('reqwest');
import LoginActions from '../actions/loginActions.js'
import {LOGIN_URL, SIGNUP_URL} from '../constants/loginConstants.js';
class AuthService {
    login(username, password){
        return this.handleAuth(when(request({
            url: LOGIN_URL,
            method: 'POST',
            crossOrigin: true,

            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
            type: 'json',
            data: {
                username,
                password
            }
    })));
    }

    logout(){
        LoginActions.logoutUser();
    }

    signup(username, password){
        return this.handleAuth(when(request({
            url: SIGNUP_URL,
            method: 'POST',
            crossOrigin: true,
            type: 'json',

            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
            data: {
                username,
                password
            }
        })))
    }

    handleAuth(loginPromise){
        return loginPromise
            .then(function(response){
                debugger;

                var jwt = response.id_token;
                LoginActions.loginUser({
                    jwt: jwt,
                    user:'alex liu'
                });
                return true;
            })

    }
}

export default new AuthService();