import { AUTHORIZE_USER } from './isAuthorisedTypes';
const isAuthorisedAction = (state = null, action) => {
  switch (action.type) {
    case AUTHORIZE_USER:
      return action.payload;
    default:
      return state;
  }
};
export default isAuthorisedAction;
