import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = {};
  render() {
    const { user } = this.props;

    return (
      <header className="nav navbar-expand-lg navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Vidly
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-item nav-link ">
              Movies
            </NavLink>
            <NavLink to="/customers" className="nav-item nav-link ">
              Customers
            </NavLink>
            <NavLink to="/rentals" className="nav-item nav-link ">
              Rentals
            </NavLink>
            {!user && (
              <React.Fragment>
                <NavLink to="/login" className="nav-item nav-link ">
                  Login
                </NavLink>
                <NavLink to="/register" className="nav-item nav-link ">
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink to="/profile" className="nav-item nav-link ">
                  {user.name}
                </NavLink>
                <NavLink to="/logout" className="nav-item nav-link ">
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
