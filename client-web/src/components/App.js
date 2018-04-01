import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Settings from './Settings';
import Tasks from './Tasks';
import Plan from './Plan';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Plan}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/tasks" component={Tasks}/>
        </div>
      </Router>
    );
  }
};
