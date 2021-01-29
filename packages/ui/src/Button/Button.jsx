import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.styles.less';

export default function Button({ children, ...others }) {
  return (
    <button className={classes.button} type="button" {...others}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};
