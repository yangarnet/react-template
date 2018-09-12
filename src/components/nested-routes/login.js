import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                 <Link to='/'>Home</Link>
                 <div>
                     this is the login page;
                 </div>
            </div>
        );
    }
}

export default Login;
