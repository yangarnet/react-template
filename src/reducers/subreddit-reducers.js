import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS_PENDING,
    REQUEST_POSTS_RESOSLVE
} from '../actions/subreddit-actions';
import { actions } from '../actions/types';


export const selectedSubreddit = (state = 'reactjs', action) => {
    switch(action.type) {
        case SELECT_SUBREDDIT: return action.subreddit;
        default: return state;
    }
};

const posts = (state = { isFetching: false, didInvalidate: false, items: [] }, action) => {
    switch(action.type) {
        case INVALIDATE_SUBREDDIT: {
            return Object.assign({}, state, { didInvalidate: true } );
        }
        case REQUEST_POSTS_PENDING: {
            return Object.assign({}, state, { isFetching: true, didInvalidate: false });
        }
        case REQUEST_POSTS_RESOSLVE: {
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        }
    }
};

export const postBySubreddit = (state = {}, action) => {
    switch(action.type) {
        case INVALIDATE_SUBREDDIT:
        case REQUEST_POSTS_PENDING:
        case REQUEST_POSTS_RESOSLVE:
        return Object.assign({}, state, {
            [action.subreddit]: posts(state[action.subreddit], action)
        });
        default: return state;
    }
};
