import { actions } from './types';

// action creators
let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: actions.ADD_TODO,
        id: nextTodoId++,
        text
    };
};

export const toggleTodo = (id) => {
    return {
        type: actions.TOGGLE_TODO,
        id
    }
};

export const setFilter = (filter) => {
    return {
        type: actions.SET_FILTER,
        filter
    }
};
