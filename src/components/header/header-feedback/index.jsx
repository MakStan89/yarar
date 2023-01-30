import React from 'react';
import styles from './styles.module.css';

export const HeaderFeedback = () => {
  return (
    <div className={styles['header-feedback']}>
      <div className={styles['header-feedback__like']}></div>
      <div className={styles['header-feedback__message']}></div>
    </div>
  )
}

export default HeaderFeedback;