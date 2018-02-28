// /src/components/Layout.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Layout = props => (
  <div className="container" id="layout-container">

    <nav className="navbar justify-content-end">
      <Link to="/" className="nav-link">HOME</Link>
    </nav>

    <div className="jumbotron">
      {props.children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
