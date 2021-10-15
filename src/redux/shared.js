import { fetchUsersAction } from './users/usersActions';
import { getInitialData } from './../api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _saveQuestion, _saveQuestionAnswer } from '../_DATA';
import {
  fetchQuestionsAction,
  saveQuestionAction,
  answerQuestionAction,
} from './questions/questionsActions';
const getData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialData()
      .then(({ users, questions }) => {
        dispatch(fetchUsersAction(users));
        dispatch(fetchQuestionsAction(questions));
        dispatch(hideLoading());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const saveQuestion = (question) => {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestion(question)
      .then((question) => {
        dispatch(hideLoading());
        dispatch(saveQuestionAction(question));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const answerQuestion = (question) => {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestionAnswer(question)
      .then(() => {
        console.log(question);
        dispatch(hideLoading());
        dispatch(answerQuestionAction(question));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export { getData, saveQuestion, answerQuestion };
