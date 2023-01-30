import React from 'react';
import styles from './styles.module.css';

export const HeaderUser = () => {
  return (
    <div className={styles['header-user']}>
      <div className={styles['header-user__name']}>Владислав</div>
      <div className={styles['header-user__photo']}></div>
      <div className={styles['header-user__arrow']}></div>
    </div>
  )
}

export default HeaderUser;