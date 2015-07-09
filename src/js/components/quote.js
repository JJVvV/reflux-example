/**
 * Created by Administrator on 2015/7/2.
 */

import React from 'react';
import Authentic from './authenticatedComponent.js';
var appActions = require('../actions/appActions');
var request = require('reqwest');
import {quoteUrl as QUOTEURL} from '../constants/quoteConstants.js';
var QuoteService = require('../services/QuoteService');
class Quote extends React.Component{
    constructor(){
        super();
        this.state = {
            username: ''
        }
    }

    componentDidMount(){
        console.log('get quote name hahahahahahahahhahaa');
        QuoteService.getName().then(this._onChange.bind(this));
    }

    _onChange(data){
        this.setState({
            username: data.data.name
        });
    }

    render(){
        return (
            <div>
                <h1>Hello Quote</h1>
                hello username is {this.state.username}
            </div>

        );
    }
}

export default Authentic(Quote);