import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                Register
                <Link to='/'>Home</Link>
            </div>
        );
    }
}

export default Register;
