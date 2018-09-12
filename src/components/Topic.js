import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MyNode from './nested-routes/MyNode';
import MyReact from './nested-routes/MyReact';
import MyAngular from './nested-routes/MyAngular';

const Topic = (props) => {
    const path = props.match.path;
    return (
        <div>
            <h3>select your Topic</h3>
            <ul>
                <li>
                    <Link to={`${path}/node-js`}>Node js</Link>
                </li>
                <li>
                    <Link to={`${path}/react-js`}>react js</Link>
                </li>
                <li>
                    <Link to={`${path}/angular-js`}>angular js</Link>
                </li>
            </ul>
            <Route path={`${path}/node-js`} component={MyNode}/>
            <Route path={`${path}/react-js`} component={MyReact}/>
            <Route path={`${path}/angular-js`} component={MyAngular}/>
        </div>
    );
};

export default Topic;
