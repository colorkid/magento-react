import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScrollDown.module.scss';

const ScrollDown = ({text, modifier}) => {
  return <div className={`${styles.scrollDown} ${modifier ? styles[modifier] : ''}`}>
    <p className={styles.text}>{text}</p>
  </div>
};

ScrollDown.propTypes = {
  text: PropTypes.string,
  modifier: PropTypes.string
};

export default ScrollDown;