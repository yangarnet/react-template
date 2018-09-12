import React, { Component } from 'react';

const MyAngular = (props) => {
    const version = props.match.params.version ?  props.match.params.version : 'default: 6';
    return (
        <div>
            <h3>welcome to learn angularjs: ${version}</h3>
        </div>
    );
};

export default MyAngular;
