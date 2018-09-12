
import { combineReducers } from 'redux';
import { todos, filter } from './todo-reducers';
import { selectedSubreddit, postBySubreddit } from './subreddit-reducers';

const rootReducer = combineReducers({
   todos,
   filter,
   yourSelectedSubreddit: selectedSubreddit,
   yourPostBySubreddit: postBySubreddit
});

export default rootReducer;
