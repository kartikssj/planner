import React from 'react';
import {Link} from 'react-router-dom';

const SECTIONS = [
  {title: 'Home', url: '/'},
  {title: 'Tasks', url: '/tasks'},
  {title: 'Settings', url: '/settings'}
];

class Header extends React.Component {
  render() {
    const {location: {pathname}} = this.props;
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sections" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/plan">Planner</Link>
          </div>
          <div className="collapse navbar-collapse" id="sections">
            <ul className="nav navbar-nav">
              {SECTIONS.map(section => (
                <li className={pathname === section.url ? 'active' : ''} key={section.url}>
                  <Link to={section.url}>{section.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
