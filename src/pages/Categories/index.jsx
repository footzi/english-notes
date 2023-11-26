import React, { useState } from 'react';
import { Categories } from '../../modules/Categories';
import { Content } from '../../modules/Content';
import { getData } from '../../data';
import styles from './index.module.css';

export const CategoriesPage = () => {
  const data = getData();
  const [activeCategory, setActiveCategory] = useState(data.categories[0]);

  const handleActiveCategory = (id) =>
    setActiveCategory(() => {
      return data.categories.find((category) => category.id === id);
    });

  return (
    <div className={styles.container}>
      <Categories
        categories={data.categories}
        activeCategory={activeCategory}
        onChangeCategory={handleActiveCategory}
      />
      <Content data={activeCategory} />
    </div>
  );
};
