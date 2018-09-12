import { actions, filter_type } from '../actions/types';

export const todos = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_TODO: {
            return [...state, { id: action.id, text: action.text, completed: false }];
        }
        case actions.TOGGLE_TODO: {
            return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } :  todo);
        }
        default: return state;
    }

};

export const filter = (state = filter_type.SHOW_ALL, action) => {
    switch(action.type) {
        case actions.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};
