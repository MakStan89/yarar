import React from 'react';
import styles from './styles.module.css';

export const NavbarSupport = () => {
  return (
    <div className={styles['navbar-support']}>
      <div className={styles['navbar-support__photo']}></div>
      <div className={styles['navbar-support__name']}>Кристина</div>
      <div className={styles['navbar-support__text']}>Ваш персональный помощник по работе с системой</div>
      <div className={styles['navbar-support__button']}><span>Написать</span></div>
      <div className={styles['navbar-support__email']}>E-mail <a href='#'>support@goodsurfing.org</a></div>
    </div>
  )
}

export default NavbarSupport;