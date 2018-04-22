import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUserAction, logoutAction} from '../../actions/index';

const SECTIONS = [
  {title: 'Plan', url: '/plan'},
  {title: 'Tasks', url: '/tasks'},
  {title: 'Settings', url: '/settings'}
];

function mapStateToProps(state) {
  return {
    user: state.user.data,
    status: state.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUserAction()),
    logout: () => dispatch(logoutAction()),
  }
}

class Header extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  componentWillReceiveProps(next) {
    const {history, location, status} = this.props;
    if (status.loggedIn === false) {
      if (location.pathname !== '/login') {
        history.push('/login');
      }
    } else if (status.loggedIn === true) {
      if (location.pathname === '/login') {
        history.push('/plan');
      }
    }
    if (this.props.status.loggedIn !== next.status.loggedIn) {
      this.props.getUser();
    }
  }
  render() {
    const {location: {pathname}, user, logout, status} = this.props;
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              {status.loggedIn &&
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sections" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar">&nbsp;</span>
                  <span className="icon-bar">&nbsp;</span>
                  <span className="icon-bar">&nbsp;</span>
                </button>}
              <Link className="navbar-brand" to="/plan">Planner</Link>
            </div>
            <div className="collapse navbar-collapse" id="sections">
              {status.loggedIn && user &&
                <p className="navbar-text">Hi, {user.username}</p>}
              <ul className="nav navbar-nav navbar-right">
                {status.loggedIn &&
                  <li><a href="/login" onClick={logout}>Logout</a></li>}
              </ul>
            </div>
          </div>
        </nav>
        {status.loggedIn &&
          <ul className="nav nav-pills">
            {SECTIONS.map(section => (
              <li className={pathname.startsWith(section.url) ? 'active' : ''} key={section.url}>
                <Link to={section.url}>{section.title}</Link>
              </li>
            ))}
          </ul>}
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
