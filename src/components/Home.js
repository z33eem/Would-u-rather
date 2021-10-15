import React, { useState } from 'react';
import AnsweredQ from './AnsweredQ';
import NonAnsweredQ from './NonAnsweredQ';
const Home = () => {
  const [answered, setAnswered] = useState(false);
  return (
    <section className='home'>
      <div className='container'>
        <div className='btn-container flex'>
          <button
            className={answered ? null : 'active'}
            onClick={() => {
              setAnswered(false);
            }}
          >
            New Questions
          </button>
          <button
            className={answered ? 'active' : null}
            onClick={() => {
              setAnswered(true);
            }}
          >
            Answered Questions
          </button>
        </div>
        <div className='home-content'>
          {answered ? <AnsweredQ /> : <NonAnsweredQ />}
        </div>
      </div>
    </section>
  );
};

export default Home;
