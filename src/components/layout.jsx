import React from 'react';
import {
  Link
} from 'react-router-dom';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li role="presentation"><Link to="/">HOME</Link></li>
        </ul>

        <div className="jumbotron">
          {this.props.children}
        </div>
      </div>
    );
  }
}
