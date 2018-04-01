import React from 'react';

const Settings = () => (
  <form>
    <h2>Settings</h2>
    <div className="form-group">
      <label>Username</label>
      <input type="text" className="form-control" id="handle" placeholder="Username" />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" id="password" placeholder="Password" />
    </div>
    <div className="form-group">
      <label>Daily Hours</label>
      <input type="text" className="form-control" id="hours" placeholder="2,2,2,2,2,5,5" />
    </div>
    <button type="submit" className="btn btn-default">Save</button>
  </form>
);

export default Settings;