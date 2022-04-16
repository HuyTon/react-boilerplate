import * as types from '../actionTypes/index';

export const loadSearchLayout = (searchType, title) => {
    return {
        type: types.LOAD_SEARCH_LAYOUT,
        searchType,
        title
    };
}
