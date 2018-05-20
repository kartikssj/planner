import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './common/Header';
import Settings from './Settings';
import Task from './Task';
import Tasks from './Tasks';
import Plan from './Plan';
import Login from './Login';
import AddTask from './AddTask';


const App = () => (
  <Router>
    <div className="container">
      <Route path="/" component={Header} />
      <Route path="/plan" component={Plan} />
      <Route path="/settings" component={Settings} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/tasks/add" component={AddTask} />
      <Route path="/tasks/details/:id" component={Task} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
