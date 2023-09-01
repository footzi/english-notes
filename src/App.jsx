import React from 'react';
import { Categories } from './components/Categories';
import { Content } from './components/Content';
import CATEGORIES from '../data/categories.json';
import styles from './index.module.css';

export const App = () => {
  console.log(CATEGORIES);
  return (
    <div className={styles.container}>
      <Categories />
      <Content />
    </div>
  );
};
