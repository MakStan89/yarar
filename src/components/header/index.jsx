import React from 'react';
import HeaderFeedback from './header-feedback';
import HeaderInfo from './header-info';
import HeaderLink from './header-link';
import HeaderUser from './header-user';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderInfo />
      <HeaderLink />
      <HeaderFeedback />
      <HeaderUser />
    </header>
  )
}

export default Header;