import React from 'react';
import {connect} from 'react-redux';
import {updateUserAction} from '../actions/index';
import {getUserAction, resetUpdateUserAction} from '../actions/index';
import Loader from './common/Loader';
import Alert from './common/Alert';


function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUserAction()),
    updateUser: (data) => dispatch(updateUserAction(data)),
    resetUpdateUser: () => dispatch(resetUpdateUserAction())
  }
}

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hours: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentDidMount() {
    this.props.getUser();
  }
  componentWillReceiveProps(nextProps) {
    const {user: nextUser} = nextProps;
    const {user} = this.props;
    if (user.data !== nextUser.data) {
      const data = nextUser.data || {};
      this.setState({
        username: data.username,
        password: data.password,
        hours: data.hours,
      })
    }
  }
  handleSave(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
  }
  handleChange(e) {
    const {target: {name, value}} = e;
    this.setState({
      [name]: value,
    })
  }
  render() {
    const {username, password, hours} = this.state;
    const {isLoading, error, updateSuccess} = this.props.user;
    const {resetUpdateUser} = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSave}>
          <h3>Settings</h3>
          <Alert type="danger" text={error} onClose={resetUpdateUser} />
          <Alert type="success" text={updateSuccess ? "Updated successfully" : null} onClose={resetUpdateUser} />
          <Loader isLoading={isLoading} />
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" value={username} name="username" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Daily Hours</label>
            <input type="text" className="form-control" placeholder="2,2,2,2,2,5,5" value={hours} name="hours" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);