import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { answerQuestion } from '../redux/shared';
const Question = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const { found, user, voted, author, avatar, optionOne, optionTwo } =
    useSelector((state) => {
      const q = state.questions[id] || null;
      if (q === null) {
        return { found: false };
      }
      const user = state.isAuthorised;
      const optionOne = {
        text: q.optionOne.text,
        votes: q.optionOne.votes.length,
      };
      const optionTwo = {
        text: q.optionTwo.text,
        votes: q.optionTwo.votes.length,
      };
      const author = q.author;
      const avatar = state.users[author].avatarURL;
      let voted = false;
      if (q.optionOne.votes.includes(user)) {
        voted = 'optionOne';
      } else if (q.optionTwo.votes.includes(user)) {
        voted = 'optionTwo';
      }
      return { found: true, user, voted, author, avatar, optionOne, optionTwo };
    });
  const totalVotes = optionOne.votes + optionTwo.votes || 0;

  const handleVoting = (option) => {
    if (!voted) {
      dispatch(answerQuestion({ authedUser: user, qid: id, answer: option }));
    }
  };

  if (!found) {
    return 'Error';
  }
  return (
    <section className='home'>
      <div className='container'>
        <div className='home-content'>
          <div className='question-box fade-in-element'>
            <h3>
              <span>{author} </span>Asks : Would You rather...
            </h3>
            <div className='box flex'>
              <div className='img-container'>
                <img
                  src={
                    avatar || 'https://image.pngaaa.com/218/2494218-middle.png'
                  }
                  alt=''
                />
              </div>
              <div className='answer-q-data flex'>
                <div className='answers'>
                  <div
                    className={`option ${
                      voted && (voted === 'optionOne' ? 'active' : 'disabled')
                    }`}
                  >
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        handleVoting('optionOne');
                      }}
                    >
                      <span className='circle'></span>
                      {optionOne.text}
                    </div>
                    {voted && (
                      <div className='bar'>
                        <span className='bar'>
                          <span
                            style={{
                              width: `${(optionOne.votes / totalVotes) * 100}%`,
                            }}
                          >
                            <span className='bar-progress lesser'></span>
                          </span>
                        </span>
                        <span className='number'>{optionOne.votes}</span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`option ${
                      voted && (voted === 'optionTwo' ? 'active' : 'disabled')
                    }`}
                  >
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        handleVoting('optionTwo');
                      }}
                    >
                      <span className='circle'></span>
                      {optionTwo.text}
                    </div>
                    {voted && (
                      <div className='bar'>
                        <span className='bar'>
                          <span
                            style={{
                              width: `${(optionTwo.votes / totalVotes) * 100}%`,
                            }}
                          >
                            <span className='bar-progress'></span>
                          </span>
                        </span>
                        <span className='number'>{optionTwo.votes}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
