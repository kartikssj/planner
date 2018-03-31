import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';
import AddTask from './AddTask';
import Plan from './Plan';

export default class App extends React.Component {
  componentDidMount() {
    fetch('/api/v1/users').then(res => console.log(res));
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/add-task" component={AddTask}/>
          <Route path="/plan" component={Plan}/>
        </div>
      </Router>
    );
  }
};
