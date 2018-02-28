/* src/components/NotFound.jsx */
/* @flow */

import React from 'react';
import Status from './Status';

const NotFound = props => (
  <Status code={404}>
    <div>
      <h1>{props.metaTitle}</h1>
    </div>
  </Status>
);

export default NotFound;
