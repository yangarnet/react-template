import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToDo from './ToDo';

// dispatch() the action creator
import { toggleTodo } from '../actions/todoAction';

const TodoList = (props) => {


    return (
        <div>
            <h3>here is your todo list:</h3>
            <br/>
            <ul>
            {console.log('todo list', props.todos)}
            { props.todos.map((todo, index) => (<ToDo key={index} {...todo} onClick={ ()=>props.onTodoClick(index) } />)) }
        </ul>
        </div>
    );
};

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

const getTodoByFilter = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
          return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
          return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
          return todos
      }
};

// by mapStateToProps; ownProps--optional;  dispatch(action) alread turns up in the props
const mapStateToProps = (state, ownProps) => {
    //console.log('todo list state:', state);
    return {
        todos: getTodoByFilter(state.todos, state.filter)
    }
};

// this is mapping dispatch(action) to an customized function
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick: (id) => {
            // dispatch action from here
            dispatch(toggleTodo(id))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

