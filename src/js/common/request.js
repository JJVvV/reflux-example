/**
 * Created by Administrator on 2015/7/7.
 */

var request = require('reqwest');

request.ajaxSetup({
    headers: {
        'Authorization ': 'Bearer ' + localStorage.getItem('jwt')
    }
});

module.exports = request;

