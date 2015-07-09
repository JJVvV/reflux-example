/**
 * Created by Administrator on 2015/7/1.
 */

import React from 'react/addons';
import LoginStore from '../stores/login-store.js';
import {Route, Link} from 'react-router';
import AuthService from '../services/AuthService.js';

export default class AuthenticatedApp extends React.Component {
    constructor() {
        super();

        this.state = this._getLoginState();
    }

    _getLoginState(){
        return {
            userLoggedIn: LoginStore.isLoggedIn()
        };
    }

    _onChange(){
       this.setState(this._getLoginState());
    }

    componentDidMount(){
        this.unsubscribe = LoginStore.listen(this._onChange.bind(this));
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    logout(e){
        e.preventDefault();
        AuthService.logout();
    }



    render(){
        return (
            <container>
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand">哈哈</a>
                    </div>
                    {this.headerItems()}
                </nav>
                {this.props.children}
            </container>
        );
    }

    headerItems(){

        if(!this.state.userLoggedIn){
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="signup">Signup</Link></li>
                </ul>
            );
        }else{
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="quote">Quote</Link></li>
                    <li><a href="" onClick={this.logout}>Logout</a></li>
                </ul>
            );
        }
    }

}

