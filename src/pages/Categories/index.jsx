import React, { useState } from 'react';
import { Categories } from '../../modules/Categories';
import { Content } from '../../modules/Content';
import { getData } from '../../data';
import styles from './index.module.css';
import { useStorage, STORAGE_KEYS } from '../../modules/hooks/useStorage';

export const CategoriesPage = () => {
  const data = getData();
  const { getItem, setItem } = useStorage();

  const [activeCategory, setActiveCategory] = useState(
    data.categories.find((category) => category.id === getItem(STORAGE_KEYS.ACTIVE_CATEGORY_ID)) ??
      data.categories[0],
  );

  const handleActiveCategory = (id) => {
    const category = data.categories.find((category) => category.id === id);

    setItem(STORAGE_KEYS.ACTIVE_CATEGORY_ID, category.id);
    setActiveCategory(category);
  };

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
