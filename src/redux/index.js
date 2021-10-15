import { applyMiddleware, createStore, combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import usersReducer from './users/usersReducer';
import questionsReducer from './questions/questionsReducer';
import isAuthorisedReducer from './isAuthorised/isAuthorisedReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    isAuthorised: isAuthorisedReducer,
    loadingBar: loadingBarReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
