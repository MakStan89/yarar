import React from 'react';
import styles from './styles.module.css';

export const HeaderInfo = () => {
  return (
    <div className={styles['header-info']}>
      <div className={styles['header-info__logo']}></div>
      <div className={styles['header-info__name']}></div>
      <div className={styles['header-info-language']}>
        <div className={styles['language-name']}>RU</div>
        <div className={styles['language-arrow']}></div>
      </div>
    </div>
  )
}

export default HeaderInfo;

