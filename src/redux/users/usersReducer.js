import { FETCH_USERS, SAVE_QUESTION, ANSWER_QUESTION } from '../types';
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case SAVE_QUESTION:
      const author = action.payload.author;
      const questions = [...state[author].questions, action.payload.id];
      state[author].questions = questions;
      return {
        ...state,
      };
    case ANSWER_QUESTION:
      const a = state[action.payload.authedUser];
      a.answers[action.payload.qid] = action.payload.answer;
      return { ...state, [action.payload.authedUser]: a };
    default:
      return state;
  }
};
export default userReducer;
