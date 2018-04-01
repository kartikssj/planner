import React from 'react';

const Tasks = () => (
  <form>
    <h2>Add Task</h2>
    <div className="form-group">
      <label>Title</label>
      <input type="email" className="form-control" placeholder="Title" />
    </div>
    <div className="form-group">
      <label>Time Required (Minutes)</label>
      <input type="number" className="form-control" placeholder="30" />
    </div>
    <div className="form-group">
      <label>Deadline</label>
      <input type="date" className="form-control" placeholder="2018/04/01" />
    </div>
    <div className="form-group">
      <label>Positivity (1-5)</label>
      <input type="number" className="form-control" placeholder="4" />
    </div>
    <div className="form-group">
      <label>Negativity (1-5)</label>
      <input type="number" className="form-control" placeholder="3" />
    </div>
    <button type="submit" className="btn btn-default">Add</button>
  </form>
);

export default Tasks;