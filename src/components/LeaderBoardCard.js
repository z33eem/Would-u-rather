import React from 'react';
import { useSelector } from 'react-redux';

const LeaderBoardCard = ({ name, avatarURL, answers, questions, total }) => {
  return (
    <div className='question-box fade-in-element'>
      <h3>
        <span>{name} </span> {total}
      </h3>
      <div className='box flex'>
        <div className='img-container'>
          <img
            src={avatarURL || 'https://image.pngaaa.com/218/2494218-middle.png'}
            alt=''
          />
        </div>
        <div className='leaderboard'>
          <div>
            Answerd Questions : <span>{answers}</span>
          </div>
          <div>
            Created Questions : <span>{questions}</span>
          </div>
          <div>
            Total : <span>{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardCard;
