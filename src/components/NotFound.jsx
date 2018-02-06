import React from 'react';
import Status from './Status';

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Oh no, it&#39;s a 404!</h1>
    </div>
  </Status>
);

export default NotFound;
