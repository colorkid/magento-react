import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContentSection.module.scss';
import ScrollDown from '../ScrollDown/ScrollDown';

const ContentSection = ({content: {title, textFirst, textSecond, ps, scrollDownText}}) => {
  return <section className={`section ${styles.contentSection}`}>
    <div className={styles.top}>
      <div className={styles.pic}/>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.p}>{textFirst}</p>
        {textSecond && <p className={styles.p}>{textSecond}</p>}
        <h2 className={styles.ps}>{ps}</h2>
      </div>
    </div>
    <div className={styles.bottom}>
      <ScrollDown text={scrollDownText} modifier={'down'}/>
    </div>
  </section>
};

ContentSection.propTypes = {
  title: PropTypes.string,
  textFirst: PropTypes.string,
  textSecond: PropTypes.string,
  ps: PropTypes.string,
  scrollDownText: PropTypes.string,
};

export default ContentSection;
