// ./src/components/HomeContainer.jsx

import PropTypes from 'prop-types';
import React from 'react';
const HomeContainer = (props) => (
  <div className="text-center">
    <h1>{props.metaTitle}</h1>
    <img id="homeImage" src='img/sprout.png' alt='MERN starter seed app'/>
  </div>
);

HomeContainer.propTypes = {
  // example prop type for example prop
  metaTitle: PropTypes.string.isRequired,
};

export default HomeContainer;
