import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Hello from './hello';
import Timer from './timer';
import Topic from './Topic';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';
import Posts from './async-connect-posts';

class App extends Component {

    render() {
        const extraData = 'extra data'
        return (
            <div>
                <h3>
                    welcome to react world: {this.props.name}
                    <Timer/>
                </h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/hello'>Hello</Link></li>
                    <li><Link to='/topic'>Topic</Link></li>
                </ul>
                <Switch>
                    <Route path='/topic' component={Topic} />
                    <Route
                        path='/hello'
                        render={ ({match}) => (<Hello match={match} data={extraData} onClick={()=>alert('you cliked on me') }/>) }
                    />
                    {/* <Redirect to='/'/> */}
                </Switch>

                <TodoList/>
                <AddTodo/>
                <Footer/>
                <br />
                <div>
                    <h2> handle async actions</h2>
                    <Posts />
                </div>
            </div>
        );
    }
}

export default App;
