import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginAction} from '../actions/index';
import Alert from './common/Alert';
import Loader from './common/Loader';


function mapStateToProps(state) {
  return {
    status: state.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doLogin: (data) => dispatch(loginAction(data))
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const {target: {name, value}} = event;
    this.setState({
      [name]: value,
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.doLogin(this.state);
  }
  render() {
    const {error, isLoading} = this.props.status;
    return (
      <div className="container">
        <Loader isLoading={isLoading} />
        <Alert type="danger" text={error} />
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please Login</h2>
          <label className="sr-only">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required
            autoFocus
            name="username"
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);