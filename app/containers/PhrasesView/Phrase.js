import React from 'react';
import PropTypes from 'prop-types';

const Phrase = props => {
  const { text } = props;
  return <li>{text}</li>;
};

Phrase.propTypes = {
  text: PropTypes.string,
};

export default Phrase;
