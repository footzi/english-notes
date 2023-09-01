import React from 'react';
import styles from './index.module.css';

export const Categories = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="" className={styles.link}>
          Категория 1
        </a>
      </li>
      <li>
        <a href="" className={styles.link}>
          Категория 2
        </a>
      </li>
      <li>
        <a href="" className={styles.link}>
          Категория 3
        </a>
      </li>
      <li>
        <a href="" className={styles.link}>
          Категория 4
        </a>
      </li>
    </ul>
  );
};
