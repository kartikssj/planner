import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Planner</h2>
    <ul>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/add-task">Add Task</Link></li>
      <li><Link to="/schedule">View Schedule</Link></li>
    </ul>
  </div>
);

export default Home;