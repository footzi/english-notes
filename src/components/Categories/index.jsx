import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

export const Categories = ({ categories, activeCategory, onChangeCategory }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {categories.map((item) => {
          const cnButton = cn(styles.button, { [styles['button_is-active']]: item.id === activeCategory.id });

          return (
            <li key={item.id}>
              <button className={cnButton} onClick={() => onChangeCategory(item.id)}>
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
