import React from 'react';
import SearchPage from '../search-page';
import styles from './styles.module.css';

export const Main = () => {
  return (
    <div className={styles.main}>
      <SearchPage />
    </div>
  )
}

export default Main;