/**
 * Created by Administrator on 2015/7/2.
 */

import React from 'react';

import Authentic from './authenticatedComponent.js';

class Home extends React.Component{
    render(){
        return (
            <h1>Hello {this.props.user}</h1>
        );
    }
}

export default Authentic(Home);