import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export const NavbarMenu = () => {

  return (
    <div className={styles['navbar-menu']}>
      <NavLink to='#' className={styles['navbar-menu-item']}>
        <div className={`${styles.icon} ${styles.where}`}></div>
        <div className={`${styles['navbar-menu-item__text']} ${styles.active}`}>Где</div>
      </NavLink>
      <NavLink to='#' className={styles['navbar-menu-item']}>
        <div className={`${styles.icon} ${styles.when}`}></div>
        <div className={styles['navbar-menu-item__text']}>Когда</div>
      </NavLink>
      <NavLink to='#' className={styles['navbar-menu-item']}>
        <div className={`${styles.icon} ${styles.whom}`}></div>
        <div className={styles['navbar-menu-item__text']}>Кому</div>
      </NavLink>
      <NavLink to='#' className={styles['navbar-menu-item']}>
        <div className={`${styles.icon} ${styles.description}`}></div>
        <div className={styles['navbar-menu-item__text']}>Описание</div>
      </NavLink>
      <NavLink to='#' className={styles['navbar-menu-item']}>
        <div className={`${styles.icon} ${styles['what-to-do']}`}></div>
        <div className={styles['navbar-menu-item__text']}>Что делать</div>
      </NavLink>
      <NavLink to='#' className={styles['navbar-menu-item']}>
        <div className={`${styles.icon} ${styles.terms}`}></div>
        <div className={styles['navbar-menu-item__text']}>Условия</div>
      </NavLink>
      <NavLink to='#' className={styles['navbar-menu-item']}>
        <div className={`${styles.icon} ${styles['finishing-touches']}`}></div>
        <div className={styles['navbar-menu-item__text']}>Последние штрихи</div>
      </NavLink>
      <NavLink to='#' className={styles['navbar-menu-item']}>
        <div className={`${styles.icon} ${styles.back}`}></div>
        <div className={styles['navbar-menu-item__text']}>Назад</div>
      </NavLink>
    </div>
  )
}

export default NavbarMenu;