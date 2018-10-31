/* global bootbox */
import React from 'react';
import {connect} from 'react-redux';
import {deleteTaskAction, doneTaskAction} from "../../actions";


function mapDispatchToProps(dispatch) {
  return {
    deleteTask: (id) => dispatch(deleteTaskAction(id)),
    doneTask: (id) => dispatch(doneTaskAction(id)),
  }
}

class TaskListItem extends React.Component {
  taskDetails(id) {
    this.props.history.push("/tasks/details/"+id);
  }
  doneTask(id) {
    bootbox.confirm("Are you sure you want to mark the task as done?", c => {
      if (c) this.props.doneTask(id);
    })
  }
  deleteTask(id) {
    bootbox.confirm("Are you sure you want to delete the task?", c => {
      if (c) this.props.deleteTask(id);
    })
  }
  render() {
    const {className, task} = this.props;
    return (
      <div className={className}>
        <div>
          {task.title}
        </div>
        <div className="row">
          <div className="col-md-8 col-xs-8">
            <small className="text-muted">({task.time_minutes}m)</small>&nbsp;
            {
              task.deadline &&
              <small><span className="text-warning">{new Date(task.deadline).toDateString()}</span></small>
            }
          </div>
          <div className="col-md-4 col-xs-4" style={{textAlign:'right'}}>
            <button className="btn btn-success btn-xs" aria-label="Done" onClick={this.taskDetails.bind(this, task.id)} style={{'marginRight':'5px'}}>
              <span className="glyphicon glyphicon-info-sign" aria-hidden="true"> </span>
            </button>
            <button className="btn btn-info btn-xs" aria-label="Done" onClick={this.doneTask.bind(this, task.id)} style={{'marginRight':'5px'}}>
              <span className="glyphicon glyphicon-ok" aria-hidden="true"> </span>
            </button>
            <button className="btn btn-warning btn-xs" aria-label="Delete" onClick={this.deleteTask.bind(this, task.id)}>
              <span className="glyphicon glyphicon-trash" aria-hidden="true"> </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(TaskListItem);
