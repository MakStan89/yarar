import React from 'react';
import styles from './styles.module.css';

export const HeaderLink = () => {
  return (
    <div className={styles['header-link']}>
      <div className={styles['header-link__icon']}></div>
      <a href='#' className={styles['header-link__text']}>Природный парк "Вулканы Камчатки"</a>
    </div>
  )
}

export default HeaderLink;