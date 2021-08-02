import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';
import Home from './components/Home';
import Login from './components/Login';
import Singup from './components/Singup';


function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Header /> */}
        <Switch>
        <Route exact path='/'>
      <Login/>
    </Route>
    
    <Route exact path='/register'>
      <Singup/>
    </Route>
          <Route path='/quiz'>
            <Quiz />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;