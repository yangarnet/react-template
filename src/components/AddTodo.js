import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';

const AddTodo = (props) => {
    let theInput;
    return (
        <div>
            <form onSubmit={ e => {
                    e.preventDefault();
                    if (!theInput.value.trim()) {
                        return;
                    }
                    // see we are dispatch action from here.
                    //props.dispatch(addTodo(theInput.value));
                    props.addNewToDo(theInput.value);
                    theInput.value = '';
                }}
            >
                {/*ref is bonding the theInput with the input element*/}
                <input ref={ node => theInput = node }/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        addNewToDo: (input) => dispatch(addTodo(input))
    };
};
// once you connect() a component, dispatch will present in the component props automatically
// no matter if you have mapStateToProps() / mapDispatchToProps() or not.
export default connect(null, mapDispatchToProps)(AddTodo);
