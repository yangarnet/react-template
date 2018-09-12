import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/root-reducer';
import { filter_type } from '../actions/types';


const initialState = { todos:[], filter: filter_type.SHOW_ALL };
const middleware = [thunk, createLogger()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(
    rootReducer,  // the single root reducer
    initialState, // initial state of the root store
    composeEnhancers(applyMiddleware(...middleware))
);


/*
getState()
dispatch(action)
subscribe(listener)
*/
export default rootStore;
