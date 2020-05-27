import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Nav.module.scss';

const Nav = ({links, top}) => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  const handleClick = () => {
    setMobileIsOpen(!mobileIsOpen);
  };

  return <nav className={`${styles.navigation} ${!top ? styles.bottom : ''} ${mobileIsOpen && styles.isOpened}`}>
    {top && <div className={styles.burger} onClick={handleClick}>∞ Menu</div>}
    <ul className={styles.ul}>
      {links.map((item, i) => {
        return <li key={i} className={styles.li}>
          <NavLink to={`${item.link}`} className={styles.a}>{item.text}</NavLink>
        </li>
      })}
    </ul>
  </nav>
};

Nav.propTypes = {
  links: PropTypes.array.isRequired,
  top: PropTypes.bool
};

export default Nav;