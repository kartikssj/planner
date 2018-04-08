/* global bootbox */
import {connect} from 'react-redux';
import React from 'react';
import bootbox from 'bootbox';
import {getTasksAction, deleteTaskAction} from '../actions/index';

function mapStateToProps(state) {
  return {
    tasks: state.tasks.list,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: () => dispatch(getTasksAction()),
    deleteTask: id => dispatch(deleteTaskAction(id))
  }
}

class Tasks extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }
  addTask() {
    this.props.history.push("/tasks/add");
  }
  deleteTask(id) {
    bootbox.confirm("Are you sure you want to delete the task?", c => {
      if (c) this.props.deleteTask(id);
    })
  }
  render() {
    const {tasks} = this.props;
    return (
      <div className="container">
        <h2>Tasks</h2>
        <table className="table">
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td style={{width: '100%'}}>{task.title}</td>
                <td>
                  <button className="btn btn-warning btn-xs" aria-label="Delete" onClick={this.deleteTask.bind(this, task.id)}>
                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-sm btn-primary" aria-label="Add" onClick={this.addTask.bind(this)}>
          <span className="glyphicon glyphicon-plus"></span> Add Task
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);