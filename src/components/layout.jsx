// ./src/components/Layout.jsx

import React from 'react';
import {Link} from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <div className="container" id="layout-container">

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>

          {/* Put another link like this :

          <li className="nav-item">
            <Link to="/blah" className="nav-link">BLAH</Link>
          </li>

          */}
        </ul>

        <div className="jumbotron">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
