import * as types from '../actionTypes/index';

export const getUsersSuccess = (users) => {
  return {
    type: types.GET_USERS,
    users
  };
}

export const deleteUserSuccess = (userId) => {
  return {
    type: types.DELETE_USER,
    userId
  };
}

export const userProfileSuccess = (userProfile) => {
  return {
    type: types.GET_USER_PROFILE,
    userProfile
  };
}
