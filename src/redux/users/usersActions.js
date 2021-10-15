import { FETCH_USERS } from '../types';
const fetchUsersAction = (users) => {
  return { type: FETCH_USERS, payload: users };
};
export { fetchUsersAction };
