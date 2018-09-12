import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectSubreddit, fetchPost, fetchPostIfNeeded } from '../actions/subreddit-actions';


class Posts extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.onFetchPost(this.props.selectRedit);
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectRedit !== prevProps.selectRedit) {
            this.props.onFetchPost(this.props.selectRedit);
        }
    }

    onChange(e) {
        console.log('select redict', e.target.value);
        // dispatch the action.
        this.props.onSelectSubredit(e.target.value);
        this.props.onFetchPost(e.target.value);
    }

    render() {

        return (
            <div>
                <label>select your subreddit:</label>
                <select onChange={this.onChange}>
                    <option value="reactjs">react</option>
                    <option value="nodejs">node</option>
                    <option value="aws">aws</option>
                    <option value="javascript">javascript</option>
                    <option value="mongodb">mongodb</option>
                </select>
                <ul>
                    {
                        this.props.posts[this.props.selectRedit] &&
                        this.props.posts[this.props.selectRedit].items.map(itm => (
                            <li key={itm.id}>
                                {`title: ${itm.title}, text: ${itm.selftext}`}
                            </li>)
                        )
                    }
                </ul>
            </div>
        );
    }
}

Posts.propTypes = {
    selectRedit: PropTypes.string.isRequired,
    posts: PropTypes.object.isRequired,
    onFetchPost: PropTypes.func.isRequired,
    onSelectSubredit: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        selectRedit: state.yourSelectedSubreddit,
        posts: state.yourPostBySubreddit
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFetchPost: subReddit => dispatch(fetchPostIfNeeded(subReddit)),
        onSelectSubredit: subReddit => dispatch(selectSubreddit(subReddit))
    };
};


// after connect,  your component will come with dispatch(), this is awesome!
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
