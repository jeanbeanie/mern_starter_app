/* src/components/NotFound.jsx */
/* @flow */

import React from 'react';
import Status from '../Status';

type Props = {
  title: string,
};

const NotFound = (props: Props) => (
  <Status code={404}>
    <h1>{props.title}</h1>
  </Status>
);

export default NotFound;
