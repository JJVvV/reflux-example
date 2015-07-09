
import React from 'react/addons';
import LoginStore from './js/stores/login-store.js'
import{Router, Route} from 'react-router';
import {history} from 'react-router/lib/HashHistory';
import AuthService from './js/services/AuthService.js'
//import LoginActions from './js/actions/loginActions.js'
var LoginActions = require('./js/actions/loginActions.js');

var AuthenticatedApp = require('./js/components/authenticatedApp.js');

import Login from './js/components/login.js';
import Signup from './js/components/signup.js';
import Home from './js/components/home.js';
import Quote from './js/components/quote.js';

import RouterContainer from './js/services/RouterContainer.js';

var routes = (
    <Router history={history}>
        <Route component={AuthenticatedApp}>
            <Route name="login" path="login" component={Login} />
            <Route name="signup" path="signup" component={Signup} />
            <Route path="/" name="home" component={Home} />
            <Route name="quote" path="quote" component={Quote} />
        </Route>
    </Router>

);
//


var router = new Router();
RouterContainer.set(router);
console.log('router: ', router.getCurrentQuery);
let jwt = localStorage.getItem('jwt');
if(jwt){
    LoginActions.loginUser.sync = true;
    LoginActions.loginUser({jwt:jwt, user: 'alex'});
}

React.render(routes, document.getElementById('root'));


//router.run(Handler =>{
//    React.render(<Handler />, document.getElementById('root'));
//});

