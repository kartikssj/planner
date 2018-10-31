import {connect} from 'react-redux';
import React from 'react';
import {getTasksAction} from '../actions/index';
import TaskListItem from './common/TaskListItem';

function mapStateToProps(state) {
  return {
    tasks: state.tasks.list,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: () => dispatch(getTasksAction()),
  }
}

class Tasks extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }
  addTask() {
    this.props.history.push("/tasks/add");
  }
  render() {
    const {tasks, history} = this.props;
    const done = tasks.filter(task => task.last_done && !task.freq_minutes);
    const pending = tasks.filter(task => {
      return !done || done.indexOf(task) < 0;
    });
    return (
      <div className="container">
        {pending.length > 0 &&
          <div>
            <h3>Pending Tasks</h3>
            <hr/>
            <div className="list-group">
              {pending.map(task => (
                <TaskListItem history={history} className="list-group-item" task={task} key={task.id} />
              ))}
            </div>
          </div>}
        {done.length > 0 &&
          <div>
            <h3>Completed Tasks</h3>
            <hr/>
            <div className="list-group">
              {done.map(task => (
                <TaskListItem history={history} className="list-group-item" task={task} key={task.id} />
              ))}
            </div>
          </div>}
        <button className="btn btn-sm btn-primary" aria-label="Add" onClick={this.addTask.bind(this)}>
          <span className="glyphicon glyphicon-plus"> </span> Add Task
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);