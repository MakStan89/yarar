import React from 'react';
import Navbar from '../navbar';
import Search from '../search';
import styles from './styles.module.css';

export const SearchPage = () => {
  return (
    <div className={styles['search-page']}>
      <Navbar />
      <Search />
    </div>
  )
}

export default SearchPage;