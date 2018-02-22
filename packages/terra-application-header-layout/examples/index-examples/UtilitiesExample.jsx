import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from './Placeholder';

const propTypes = {
  size: PropTypes.string,
};

const ExtensionsExample = ({ size }) => {
  let text = 'Utilities';
  let width = '150px';
  if (size === 'tiny') {
    text = 'U';
    width = '50px';
  } else if (size === 'small') {
    text = 'Util';
    width = '100px';
  }
  return (
    <Placeholder text={text} width={width} />
  );
};

ExtensionsExample.propTypes = propTypes;

export default ExtensionsExample;
