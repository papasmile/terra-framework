import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from './Placeholder';

const propTypes = {
  size: PropTypes.string,
};

const ExtensionsExample = ({ size }) => {
  let text = 'Toggle';
  let width = '150px';
  if (size === 'tiny') {
    text = 'T';
    width = '50px';
  } else if (size === 'small') {
    text = 'Tog';
    width = '100px';
  }
  return (
    <Placeholder text={text} width={width} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
