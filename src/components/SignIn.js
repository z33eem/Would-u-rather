import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authorizeUser } from '../redux/isAuthorised/isAuthorisedAction';
import { useHistory, useLocation } from 'react-router-dom';

const SignIn = () => {
  let history = useHistory();
  const { state } = useLocation();
  const isAuthorised = useSelector((state) => state.isAuthorised);
  const usersName = useSelector((state) => {
    return Object.keys(state.users);
  });
  const dispatch = useDispatch();
  if (isAuthorised) {
    history.push(state?.from || '/');
  }
  return (
    <>
      {usersName.length !== 0 && (
        <section className='sigin'>
          <div className='container'>
            <form action='' className='form'>
              <h3>Sign in</h3>
              <p>Choose Acount to sign in</p>
              <select
                value=''
                className='selectBox'
                onChange={(e) => {
                  dispatch(authorizeUser(e.target.value));
                  history.push(state?.from || '/');
                }}
              >
                <option value='' disabled>
                  Choose User
                </option>
                {usersName.map((name) => {
                  return (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default SignIn;
