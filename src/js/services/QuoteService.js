/**
 * Created by Administrator on 2015/6/30.
 */


import when from 'when';
var request = require('reqwest');
import LoginActions from '../actions/loginActions.js'
import {LOGIN_URL, SIGNUP_URL} from '../constants/loginConstants.js';
import {quoteUrl as QUOTEURL} from '../constants/quoteConstants.js';
class QuoteService {
    getName(){
        return  request({
            url: QUOTEURL,
            method: 'get',
            crossOrigin: true,
            type: 'json',

            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        });
    }





}

export default new QuoteService();