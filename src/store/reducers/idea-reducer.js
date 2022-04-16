import * as types from '../actionTypes/index';
import _ from 'lodash';

const initialState = {
  ideas: []
};

const ideaReducer = function (state = initialState, action) {
  switch (action.type) {
    
    case types.GET_IDEAS:
      return Object.assign({}, state, { ideas: action.ideas });

    case types.ADD_IDEA:
      if (action.idea) {
        // Clone the current idea list in state
        let newIdeaList = Object.assign({}, state.ideas);
        newIdeaList.push(action.idea);

        // Return the new idea list which is added new idea
        return Object.assign({}, state, { ideas: newIdeaList });
      }
      else {
        return state;
      }

    case types.UPDATE_IDEA:
      if (action.idea && action.idea.id) {
        let updateIdea = _.filter(state.ideas, idea => idea.id === action.idea.id);

        if (updateIdea) {
          // Find the index of element need to be updated
          const updateIndex = state.ideas.findIndex(updateIdea);

          if (updateIndex > -1) {
            // Clone the current idea list in state
            let newIdeaList = Object.assign({}, state.ideas);
            // Update with new idea
            newIdeaList[updateIndex] = action.idea;

            return newIdeaList;
          }
          else {
            return state;
          }
        }
        else {
          return state;
        }
      }
      else {
        return state;
      }
    case types.DELETE_IDEA:
      if (action.ideaId) {
        // Use lodash to create a new ideas array without the idea we want to remove
        const newIdeaList = _.filter(state.ideas, idea => idea.id != action.ideaId);
        return Object.assign({}, state, { ideas: newIdeaList });
      }
      else {
        return state;
      }
  }

  return state;
}

export default ideaReducer;
