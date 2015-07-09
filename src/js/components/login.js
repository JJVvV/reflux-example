/**
 * Created by Administrator on 2015/6/10.
 */


var React = require('react/addons');

import Auth from '../services/AuthService.js';
import objectAssign from 'object-assign';

var LoginStore = require('../stores/login-store');

export default class Login extends React.Component {

    static willTransitionTo(transition){
        if(LoginStore.isLoggedIn()){
            transition.redirect('/');
        }
    }

    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            extra: ''
        };
    }

    login(e){
        e.preventDefault();
        Auth.login(this.state.username, this.state.password)
            .catch(function(err){
                alert("There's an error logging in");
                console.log("error loggin in", err);
            })
    }

    render(){
        return (
            <div className="login">
                <h1>Login</h1>

                <form role="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" valueLink={this.linkState('username')} className="form-control" placeholder="Username" id="username"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" valueLink={this.linkState('password')} className="form-control" placeholder="Username" id="password" />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
                </form>
            </div>
        );
    }
}

objectAssign(Login.prototype, React.addons.LinkedStateMixin);