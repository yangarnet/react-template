import fetch from 'cross-fetch';
import axios from 'axios';

// the following is defining the sync actions (aciton creator)
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const selectSubreddit = (subreddit) => {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    };
};


export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const invalidateSubreddit = (subreddit) => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
};


export const REQUEST_POSTS_PENDING = 'REQUEST_POSTS_PENDING';
const requestPost = (subreddit) => {
    return {
        type: REQUEST_POSTS_PENDING,
        subreddit
    }
};


export const REQUEST_POSTS_RESOSLVE = 'REQUEST_POSTS_RESOSLVE';
const receivePosts = (subreddit, json) => {
    return {
        type: REQUEST_POSTS_RESOSLVE,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    };
};

export const REQUEST_POSTS_REJECT = 'REQUEST_POSTS_REJECT';
const fetchPostError = (subreddit, error) => {
    return {
        type: REQUEST_POSTS_REJECT,
        subreddit,
        error
    }
};

// see the async action creator.
export const fetchPost = (subreddit) => (dispatch) => {
    dispatch(requestPost(subreddit));
    return axios.get(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => {
            return response.data;
        },
            error => dispatch(fetchPostError(subreddit, error)))
        .then(data => {
            dispatch(receivePosts(subreddit, data));
        })
};

const shouldFetchPost = (state, subreddit) => {
    const posts = state.yourPostBySubreddit[subreddit];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
};

export const fetchPostIfNeeded = (subreddit) => (dispatch, getState) => {

    if (shouldFetchPost(getState(), subreddit)) {
        return dispatch(fetchPost(subreddit));
    } else {
        return Promise.resolve();
    }
};
