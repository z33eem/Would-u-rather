import React, { useEffect } from 'react';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import AddNewQuestion from './components/AddNewQuestion';
import LeaderBoard from './components/LeaderBoard';
import Question from './components/Question';
import LoadingBar from 'react-redux-loading-bar';
import { getData } from './redux/shared';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function App() {
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
          <Route path='/signin'>
            <SignIn />
          </Route>
          <PrivateRoute path='/' exact>
            <Home />
          </PrivateRoute>
          <PrivateRoute path='/add'>
            <AddNewQuestion />
          </PrivateRoute>
          <PrivateRoute path='/leaderboard'>
            <LeaderBoard />
          </PrivateRoute>
          <PrivateRoute path='/questions/:id'>
            <Question />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
