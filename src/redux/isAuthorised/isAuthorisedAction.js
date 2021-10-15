import { AUTHORIZE_USER } from './isAuthorisedTypes';
const authorizeUser = (name) => {
  return {
    type: AUTHORIZE_USER,
    payload: name,
  };
};
export { authorizeUser };
