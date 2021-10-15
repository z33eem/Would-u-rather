import React from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionCard';
const NonAnsweredQ = () => {
  const data = useSelector((state) => {
    const questions = Object.keys(state.questions);
    const anseredQ = Object.keys(state.users[state.isAuthorised].answers);
    anseredQ.map((id) => {
      questions.splice(questions.indexOf(id), 1);
      return null;
    });
    return questions.reverse();
  });
  if (data.length < 1) {
    return <p>No Avilable Questions..</p>;
  }
  return (
    <>
      {data.map((qId) => {
        return <QuestionCard key={qId} qId={qId} />;
      })}
    </>
  );
};

export default NonAnsweredQ;
