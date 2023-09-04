import React from 'react';
import cn from 'classnames';

import styles from './index.module.css';
import { TABS } from '../../constants.js';

export const Tabs = ({ activeTab, onChange }) => {
  const getCn = (id) => cn(styles.button, { [styles['button_is-active']]: id === activeTab });

  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <button className={getCn(TABS.Description)} onClick={() => onChange(TABS.Description)}>
            Описание
          </button>
        </li>
        <li>
          <button className={getCn(TABS.Task)} onClick={() => onChange(TABS.Task)}>
            Тренировка
          </button>
        </li>
      </ul>
    </nav>
  );
};
