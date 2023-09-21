import React, { useState } from 'react';
import { Tabs } from '../Tabs/index.jsx';
import { TABS } from '../../constants.js';
import { Tasks } from '../Tasks/index.jsx';
import { Description } from '../Description/index.jsx';
import styles from './index.module.css';
import { Grammar } from '../Grammar/index.jsx';

export const Content = ({ data }) => {
  const { questions, grammar } = data;
  const [activeTab, setActiveTab] = useState(TABS.Task);

  const handleChangeTab = (id) => setActiveTab(id);

  return (
    <div>
      <Tabs activeTab={activeTab} onChange={handleChangeTab} />

      <div className={styles.content}>
        {activeTab === TABS.Task && <Tasks questions={questions} />}
        {activeTab === TABS.Description && <Description questions={questions} />}
        {activeTab === TABS.Grammar && <Grammar grammar={grammar} />}
      </div>
    </div>
  );
};
