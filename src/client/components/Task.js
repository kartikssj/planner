import {connect} from 'react-redux';
import React from 'react';
import {getTaskAction} from '../actions/index';
import {Link} from 'react-router-dom';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function mapStateToProps(state) {
  return {
    tasks: state.tasks.list,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTask: (id) => dispatch(getTaskAction(id)),
  }
}

class Task extends React.Component {
  componentDidMount() {
    const {match: {params: {id}}} = this.props;
    this.props.getTask(id);
  }
  back() {
    this.props.history.push('/tasks');
  }
  render() {
    const {tasks, match: {params: {id}}} = this.props;
    const task = tasks.find(task => task.id === id);
    if (!task) {
      return (
        <div className="container">
          <h3>No task found!</h3>
          <hr/>
          <h4><Link to='/tasks'>&laquo; Go Back</Link></h4>
        </div>
      );
    }
    const filterDays = task.filter_days.split(',');
    return (
      <div className="container">
        <div>
          <h3>{task.title}</h3>
          <hr/>
          <ul>
            <li>Created {task.created}</li>
            <li>Updated {task.updated}</li>
            {task.deleted &&
              <li>Deleted {task.deleted}</li>}
            <li>{task.time_minutes} Minutes</li>
            <li>Happyness Index {task.result_positive}</li>
            <li>Sadness Index {task.result_negative}</li>
            {task.deadline &&
              <li>Complete by {task.deadline}</li>}
            <li>Can be done on {days.map(day => {
              if (filterDays[days.indexOf(day)] === 'true') {
                return day + " ";
              }
            })}</li>
            {task.freq_minutes &&
              <li>Every {task.freq_minutes/60/24} days starting {task.starting}</li>}
          </ul>
          <button className="btn btn-sm btn-primary" aria-label="Back" onClick={this.back.bind(this)}>
            <span className="glyphicon glyphicon-backward"> </span> Back
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);