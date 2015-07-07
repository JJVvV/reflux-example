var React = require('react');
var TableStore = require('./js/stores/table-store');
var Reflux = require('reflux');
var Actions = require('./js/actions/app-actions');
import {Router, Route} from 'react-router';
import {history} from 'react-router/lib/HashHistory';
//var HashHistory = require('react-router/lib/HashHistory');

//var HashHistory = require('react-router/lib/HashHistory');


//var DefaultRoute = Router.DefaultRoute;
var About = require('./js/components/test/about');
var Home = require('./js/components/test/home');
var Inbox = require('./js/components/test/inbox');


var App = React.createClass({
    mixins:[Reflux.connect(TableStore)],

    componentDidMount(){



        //Actions.loadPage();
    },
    render(){

        return(
            <div>
                <h1>App asdfasd</h1>

                {this.props.children}

            </div>
        );
    }
});

console.log(history);
var routes = (
   <Router history={history}>
       <Route path='/' component={App}>
           <Route  path="about" component={About} />
           <Route path="home" component={Home} />

       </Route>
   </Router>
);

//React.render(routes, document.querySelector('#root'));