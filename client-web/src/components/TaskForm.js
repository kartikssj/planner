import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(next) {
    const {task} = this.props;
    const {task: nextTask} = next;
    if (task !== nextTask) {
      this.setState(nextTask);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const {onSubmit} = this.props;
    onSubmit(this.state);
  }
  handleChange(e) {
    const {target: {name, value}} = e;
    this.setState({
      [name]: value,
    })
  }
  render() {
    const fields = [
      {name: 'title', label: 'Title', type: 'text', placeholder: 'Title'},
      {name: 'time_minutes', label: 'Time Required (Minutes)', type: 'number', placeholder: '30'},
      {name: 'deadline', label: 'Deadline', type: 'date', placeholder: '2018/04/01'},
      {name: 'result_positive', label: 'Positivity (1-5)', type: 'number', placeholder: '4'},
      {name: 'result_negative', label: 'Negativity (1-5)', type: 'number', placeholder: '3'},
    ];
    const {title, task = {}} = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3>{title}</h3>
          {fields.map(field => (
            <div className="form-group" key={field.name}>
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={task[field.name]}
                placeholder={field.placeholder}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;