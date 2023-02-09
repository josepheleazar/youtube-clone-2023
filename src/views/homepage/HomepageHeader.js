import React from 'react';
import styles from './HomepageHeader.module.scss';

import categories from '../../configs/categories';

export default function HomepageHeader() {
  return(
    <header className={styles['header__container']}>
      {
        categories.map((item) => (
          item === 'All' ? (
            <button className={styles['header__button-category--active']}> {item} </button>
          ) : (
            <button className={styles['header__button-category']}> {item} </button>
          )
        ))
      }
    </header>
  );
}