/**
 * Created by Administrator on 2015/6/30.
 */

import React from 'react/addons';
//import LoginStore from '../stores/login-store.js';
var LoginStore = require('../stores/login-store');
export default (ComposedComponent) =>{
    return class AuthenticatedComponent extends React.Component {

        static willTransitionTo(transition){
            if(!LoginStore.isLoggedIn()){
                transition.redirect('/login', {}, {'nextPath': transition.path});
            }
        }

        constructor(){
            super();
            this.state = this._getLoginState();
        }

        _getLoginState(){
            return {
                userLoggedIn: LoginStore.isLoggedIn(),
                user: LoginStore.user,
                jwt: LoginStore.jwt
            }
        }

        componentDidMount(){
            console.log('authenticatedComponent div mount');
            this.unsubscribe = LoginStore.listen(this._onChange.bind(this));
        }

        componentWillUnmount(){

            this.unsubscribe();
        }
        _onChange(){
            this.setState(this._getLoginState());
        }

        render(){
          return (
            <ComposedComponent
                {...this.props}
                user={this.state.user}
                jwt={this.state.jwt}
                userLoggedIn={this.state.userLoggedIn}
                />
          );
        }
    }
}