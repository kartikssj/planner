import React from 'react';
import {connect} from 'react-redux';
import {getPlanAction} from '../actions/index';
import TaskListItem from './common/TaskListItem';

function mapStateToProps(state) {
  return {
    plan: state.plan,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPlan: () => dispatch(getPlanAction()),
  }
}

class Plan extends React.Component {
  componentDidMount() {
    this.props.getPlan();
  }
  render() {
    const {plan: {days}, history} = this.props;
    return (
      <div className="container">
        <h3>Plan</h3>
        <hr/>
        {days.map(day => {
          if (!day.tasks || !day.tasks.length) return null;
          const date = new Date(day.date).toDateString();
          return (
            <div key={day.date}>
              <h4>{date}</h4>
              <div className="alert alert-warning" role="alert">{day.unused} Minutes Free</div>
              <div className="list-group">
                {day.tasks.map(task => (
                  <TaskListItem history={history} task={task} className="list-group-item" key={task.id} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan);