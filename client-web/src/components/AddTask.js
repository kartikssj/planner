import {connect} from 'react-redux';
import React from 'react';
import {addTaskAction} from '../actions/index';
import TaskForm from './TaskForm';

function mapDispatchToProps(dispatch) {
  return {
    addTask: (data) => dispatch(addTaskAction(data))
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

class AddTask extends React.Component {
  componentWillReceiveProps(next) {
    if (next.tasks.addSuccess && !this.props.tasks.addSuccess) {
      this.props.history.push("/tasks");
    }
  }
  render() {
    return (
      <TaskForm onSubmit={this.props.addTask} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);