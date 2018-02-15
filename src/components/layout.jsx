// /src/components/Layout.jsx

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <div className="container" id="layout-container">

        <nav className="navbar justify-content-end">
          <Link to="/" className="nav-link">HOME</Link>
        </nav>

        <div className="jumbotron">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = { 
  children: PropTypes.node.isRequired,
};

export default Layout;
