import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        };
    }

    tick() {
        this.intervalId = setInterval(()=>{
            this.setState({
                currentTime: new Date().toLocaleTimeString()
            });
        }, 1000)
    }

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h2>currentTime:{this.state.currentTime}</h2>
            </div>
        );
    }
}

export default Timer;
