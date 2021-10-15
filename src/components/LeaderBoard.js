import React from 'react';
import { useSelector } from 'react-redux';
import LeaderBoardCard from './LeaderBoardCard';
const LeaderBoard = () => {
  const users = useSelector((state) => {
    const userIds = Object.keys(state.users);
    const formattedUsers = userIds
      .map((id) => {
        const { name, avatarURL, answers, questions } = state.users[id];
        return {
          name,
          avatarURL,
          answers: Object.keys(answers).length,
          questions: Object.keys(questions).length,
          total: Object.keys(answers).length + Object.keys(questions).length,
        };
      })
      .sort(function (a, b) {
        return b.total - a.total;
      });
    return formattedUsers;
  });

  return (
    <section className='leaderboard'>
      <div className='container'>
        {users.map((user) => (
          <LeaderBoardCard key={user.name} {...user} />
        ))}
      </div>
    </section>
  );
};

export default LeaderBoard;
