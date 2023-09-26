import React from 'react';
import { FaArrowsSpin } from 'react-icons/fa6';
import { FaSort } from 'react-icons/fa';
import { Button } from '../Button/index.jsx';
import styles from './index.module.css';
import { TABS } from '../../constants.js';

export const TopButtons = ({ activeTab, isRandom, isReverse, onReverse, onRandom }) => {
  if (activeTab === TABS.Grammar) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {activeTab === TABS.Task && (
        <li>
          <Button Icon={FaArrowsSpin} ariaLabel="Перемешать" onClick={onRandom} isActive={isRandom} />
        </li>
      )}

      <li>
        <Button Icon={FaSort} ariaLabel="Отсортировать" onClick={onReverse} isActive={isReverse} />
      </li>
    </ul>
  );
};
