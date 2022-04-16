import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import ideaReducer from './idea-reducer';
import widgetReducer from './widget-reducer';
import searchLayoutReducer from './search-layout-reducer';
import shapeReducer from './shape-reducer';

// Combine Reducers
var reducers = combineReducers({
    shapeState: shapeReducer,
    userState: userReducer,
    ideaState: ideaReducer,
    widgetState: widgetReducer,
    searchLayoutState: searchLayoutReducer
});

export default reducers;
