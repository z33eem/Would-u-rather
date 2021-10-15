import { FETCH_QUESTIONS, SAVE_QUESTION, ANSWER_QUESTION } from '../types';
const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload;
    case SAVE_QUESTION:
      return { ...state, [action.payload.id]: action.payload };
    case ANSWER_QUESTION:
      const q = state[action.payload.qid];
      q[[action.payload.answer]].votes.push(action.payload.authedUser);
      return { ...state, [action.payload.qid]: q };
    default:
      return state;
  }
};
export default questionsReducer;
