import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopSection.module.scss';
import ScrollDown from '../ScrollDown/ScrollDown';

const TopSection = ({content: {scrollDownText}}) => {
  return <section className={`section ${styles.topSection}`}>
    <div className={styles.content}>
      <ScrollDown text={scrollDownText}/>
    </div>
  </section>
};

TopSection.propTypes = {
  scrollDownText: PropTypes.string
};

export default TopSection;