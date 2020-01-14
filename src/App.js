import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './contex/github/githubState';
import AlertState from './contex/alert/alertState';
import NotFound from './components/pages/NotFound';
const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound}/>

                )} />
            </Switch>
            </div>
          </div>
        </Router>

      </AlertState>
    </GithubState>
  );
}

export default App;
