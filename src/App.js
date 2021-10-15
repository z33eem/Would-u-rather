import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import AddNewQuestion from './components/AddNewQuestion';
import LeaderBoard from './components/LeaderBoard';
import Question from './components/Question';
import LoadingBar from 'react-redux-loading-bar';
import { getData } from './redux/shared';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
function App({ author }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className='wrapper'>
      <Router>
        <LoadingBar />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            {author ? <Home /> : <Redirect to='/signin' />}
          </Route>
          <Route path='/add'>
            {author ? <AddNewQuestion /> : <Redirect to='/signin' />}
          </Route>
          <Route path='/leaderboard'>
            {author ? <LeaderBoard /> : <Redirect to='/signin' />}
          </Route>
          <Route path='/questions/:id'>
            {author ? <Question /> : <Redirect to='/signin' />}
          </Route>
          <Route path='/signin'>
            {author ? <Redirect to='/' /> : <SignIn />}
          </Route>
          <Route path='*'>Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { author: state.isAuthorised };
};
export default connect(mapStateToProps)(App);
