import {connect} from 'react-redux';
import React from 'react';
import {addTaskAction} from '../actions/index';
import TaskForm from './TaskForm';
import Alert from './common/Alert';
import Loader from './common/Loader';

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
      this.back();
    }
  }
  back() {
    this.props.history.push("/tasks");
  }
  render() {
    const {tasks} = this.props;
    return (
      <div className="container">
        <h3>Add Task</h3>
        <Loader isLoading={tasks.isLoading} />
        <Alert type="danger" text={tasks.error} />
        <TaskForm onSubmit={this.props.addTask} onCancel={this.back.bind(this)} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);