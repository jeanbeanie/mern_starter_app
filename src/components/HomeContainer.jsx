// ./src/components/HomeContainer.jsx

import PropTypes from 'prop-types';
import React from 'react';
const HomeContainer = (props) => (
  <div>
    <h1>{props.metaTitle}</h1>
  </div>
);

HomeContainer.propTypes = {
  // example prop type for example prop
  metaTitle: PropTypes.string.isRequired,
};

export default HomeContainer;
