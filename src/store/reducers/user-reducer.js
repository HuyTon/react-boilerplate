import * as types from '../actionTypes/index';
import _ from 'lodash';

const initialState = {
  users: [],
  userProfile: {
    repos: []
  }
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS:
      return Object.assign({}, state, { users: action.users });

    case types.DELETE_USER:

      // Use lodash to create a new user array without the user we want to remove
      const newUsers = _.filter(state.users, user => user.id != action.userId);
      return Object.assign({}, state, { users: newUsers });

    case types.GET_USER_PROFILE:
      return Object.assign({}, state, { userProfile: action.userProfile });

  }

  return state;

}

export default userReducer;
