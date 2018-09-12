import React from 'react';
import { filter_type } from '../actions/types';
import FilterLink from './FilterLink';

const Footer = () => {
    return (
        <div>
        <span>Show: </span>
        <FilterLink filter={filter_type.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={filter_type.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter={filter_type.SHOW_COMPLETED}>
            Completed
        </FilterLink>
      </div>
    );
}

export default Footer;
