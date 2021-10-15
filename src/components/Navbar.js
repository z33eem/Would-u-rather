import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authorizeUser } from '../redux/isAuthorised/isAuthorisedAction';
const Navbar = () => {
  const authorised = useSelector((state) => {
    return {
      name: state.isAuthorised,
      avatar:
        state.users[state.isAuthorised] &&
        state.users[state.isAuthorised].avatarURL,
    };
  });
  const dispatch = useDispatch();
  return (
    <nav className='navbar'>
      <div className='container flex'>
        <ul className='flex'>
          <li>
            <NavLink exact to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              Add question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
        <div className='user-info flex'>
          {authorised.name ? (
            <>
              <div>
                <img
                  src={
                    authorised.avatar ||
                    'https://image.pngaaa.com/218/2494218-middle.png'
                  }
                  alt='logo'
                />
              </div>
              <p>{authorised.name}</p>
              <button
                onClick={() => {
                  dispatch(authorizeUser(''));
                }}
              >
                Log out
              </button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
