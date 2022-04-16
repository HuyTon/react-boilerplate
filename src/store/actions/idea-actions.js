import * as types from '../actionTypes/index';

export const get_ideas = (ideas) => {
  return {
    type: types.GET_IDEAS,
    ideas
  };
}

export const add_idea = (idea) => {
  return {
    type: types.ADD_IDEA,
    idea
  };
}

export const update_idea = (idea) => {
  return {
    type: types.UPDATE_IDEA,
    idea
  };
}

export const delete_idea = (ideaId) => {
  return {
    type: types.DELETE_IDEA,
    ideaId
  };
}
