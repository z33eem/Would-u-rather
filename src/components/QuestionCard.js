import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const QuestionCard = ({ qId }) => {
  const data = useSelector((state) => {
    const q = state.questions[qId];
    return { q, userAvatr: state.users[q.author].avatarURL };
  });
  const avatar =
    data.userAvatr || 'https://image.pngaaa.com/218/2494218-middle.png';
  const { id, author, optionOne, optionTwo } = data.q;
  return (
    <div className='question-box fade-in-element'>
      <h3>
        <span>{author} </span>Asks : Would You rather...
      </h3>
      <div className='box flex'>
        <div className='img-container'>
          <img src={avatar} alt='' />
        </div>
        <div className='q-data flex'>
          <h4>
            {optionOne.text} OR {optionTwo.text}
          </h4>
          <Link to={`/questions/${id}`}>
            <button>View Question</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
