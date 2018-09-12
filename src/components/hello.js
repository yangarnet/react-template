import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './nested-routes/register';
import Login from './nested-routes/login';

class Hello extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const match = this.props.match;
        const extraData = [1,2,3];
        return (
            <div>
                <h3>welcome to Hello</h3>
                <ul>
                    <li>
                        <Link to={`${match.path}/login`}>login</Link>
                    </li>
                    <li>
                        <Link to={`${match.path}/register`}>register</Link>
                    </li>
                </ul>
                <Route path={`${match.path}/login`} component={Login}/>
                <Route path={`${match.path}/register`} render={(props)=>(
                    <Register {...props} data ={extraData} />
                )}/>
            </div>
        );
    }
}

export default Hello;
