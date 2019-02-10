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
    this.props.history.goBack();
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
          <table className="table">
            <tbody>
            <tr>
              <td>Created</td><td>{new Date(task.created).toDateString()}</td>
            </tr>
            <tr>
              <td>Updated</td><td>{new Date(task.updated).toDateString()}</td>
            </tr>
            {task.deleted && (
              <tr>
                <td>Deleted</td><td>{task.deleted}</td>
              </tr>
            )}
            <tr>
              <td>Time Required</td><td>{task.time_minutes}m</td>
            </tr>
            <tr>
              <td>Happyness Index</td><td>{task.result_positive}</td>
            </tr>
            <tr>
              <td>Sadness Index</td><td>{task.result_negative}</td>
            </tr>
            {task.deadline && (
              <tr>
                <td>Deadline</td><td>{new Date(task.deadline).toDateString()}</td>
              </tr>
            )}
            <tr>
              <td>Days</td>
              <td>
                {days.map(day => {
                  if (filterDays[days.indexOf(day)] === 'true') {
                    return day + " ";
                  }
                })}
              </td>
            </tr>
            {task.freq_minutes && (
              <tr>
                <td>Repeat Every</td>
                <td>{task.freq_minutes/60/24} days starting {task.starting}</td>
              </tr>
            )}
            </tbody>
          </table>
          <button className="btn btn-sm btn-primary" aria-label="Back" onClick={this.back.bind(this)}>
            <span className="glyphicon glyphicon-backward"> </span> Back
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);