import React from 'react';
import NavbarMenu from './navbar-menu';
import NavbarSupport from './navbar-support';
import styles from './styles.module.css';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavbarMenu />
      <NavbarSupport />
    </div>
  )
}

export default Navbar;