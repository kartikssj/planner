import React from 'react';

const fields = [
  {name: 'title', label: 'Title', type: 'text', placeholder: 'Title'},
  {name: 'time_minutes', label: 'Time Required (Minutes)', type: 'number', placeholder: '30'},
  {name: 'result_positive', label: 'Positivity (1-5)', type: 'number', placeholder: '4'},
  {name: 'result_negative', label: 'Negativity (1-5)', type: 'number', placeholder: '3'},
  {name: 'deadline', label: 'Deadline', type: 'date', placeholder: '2018/04/07'},
  {name: 'freq_minutes', label: 'Frequence Days (Recurring Tasks)', type: 'number', placeholder: '7', transform: val => parseInt(val, 10)*24*60},
  {name: 'starting', label: 'Starting Date (Recurring Tasks)', type: 'date', placeholder: '2018/04/01'},
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'filter_days': 'true,true,true,true,true,true,true'};
    this.handleChangeFilterDays = this.handleChangeFilterDays.bind(this);
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
    const field = fields.find(field => name === field.name);
    this.setState({
      [name]: field.transform ? field.transform(value) : value,
    })
  }
  handleChangeFilterDays(e) {
    const {target: {name, value}} = e;
    const filterDays = this.state[name].split(',');
    const idx = days.indexOf(value);
    filterDays[idx] = filterDays[idx] === 'true' ? 'false' : 'true';
    this.setState({
      [name]: filterDays.join(','),
    });
  }
  render() {
    const {title, task = {}, onCancel} = this.props;
    return (
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
        <label>Task can be done on</label>
        {days.map(day => (
          <span key={day} className="checkbox">
            <label>
              <input name="filter_days" type="checkbox" defaultChecked onClick={this.handleChangeFilterDays} value={day} /> {day}
            </label>
          </span>
        ))}
        <button type="submit" className="btn btn-primary" style={{'marginRight':'5px'}}>Save</button>
        <button className="btn btn-default" onClick={onCancel}>Cancel</button>
      </form>
    );
  }
}

export default TaskForm;