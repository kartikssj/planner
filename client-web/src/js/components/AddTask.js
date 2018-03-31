import React from 'react';

const AddTask = () => (
  <form>
    <h2>Add Task</h2>
    <div className="form-group">
      <label>Title</label>
      <input type="email" className="form-control" id="title" placeholder="Title" />
    </div>
    <button type="submit" className="btn btn-default">Add</button>
  </form>
);

export default AddTask;