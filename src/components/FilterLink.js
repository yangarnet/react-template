import { connect } from 'react-redux';
import Link from './Link';
import { setFilter } from '../actions/todoAction';


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filter
    };
};

// see the own props defined in Footer.js
const mapDispatchToProps = (dispatch, ownProps) => {
    return { // see the FilterLink ownprops
        // dispatch the filter action
        onClick: () => dispatch(setFilter(ownProps.filter))
    };
};

// when used connect, the Linked component will automatically come with dispatch(action)
export default connect(mapStateToProps, mapDispatchToProps)(Link);
