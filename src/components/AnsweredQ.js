import React from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionCard';
const AnsweredQ = () => {
  const data = useSelector((state) => {
    return Object.keys(state.users[state.isAuthorised].answers).reverse();
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

export default AnsweredQ;
