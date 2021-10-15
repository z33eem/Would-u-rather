import { FETCH_QUESTIONS, SAVE_QUESTION, ANSWER_QUESTION } from '../types';
const fetchQuestionsAction = (questions) => {
  return { type: FETCH_QUESTIONS, payload: questions };
};
const saveQuestionAction = (question) => {
  return { type: SAVE_QUESTION, payload: question };
};
const answerQuestionAction = (question) => {
  return { type: ANSWER_QUESTION, payload: question };
};
export { fetchQuestionsAction, saveQuestionAction, answerQuestionAction };
