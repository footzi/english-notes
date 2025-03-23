import React, { useState } from 'react';
import { Tabs } from '../../components/Tabs/index.jsx';
import { TABS } from '../../constants.js';
import { Tasks } from './Tasks/index.jsx';
import { Description } from './Description/index.jsx';
import styles from './index.module.css';
import { Grammar } from './Grammar/index.jsx';
import { TopButtons } from '../../components/TopButtons/index.jsx';
import { useControls } from '../hooks/useControls.js';

export const Content = ({ data }) => {
  const [activeTab, setActiveTab] = useState(TABS.Task);

  const { questions, descriptions, isRandom, isReverse, onReverse, onRandom } = useControls(data.questions);

  const handleChangeTab = (id) => setActiveTab(id);


  return (
    <div>
      <div className={styles.top}>
        <Tabs activeTab={activeTab} onChange={handleChangeTab} />
        <TopButtons
          isRandom={isRandom}
          isReverse={isReverse}
          onReverse={onReverse}
          onRandom={onRandom}
          activeTab={activeTab}
        />
      </div>

      <div className={styles.content}>
        {activeTab === TABS.Task && <Tasks questions={questions} />}
        {activeTab === TABS.Description && <Description descriptions={descriptions} categoryId={data.id}/>}
        {activeTab === TABS.Grammar && <Grammar grammar={data.grammar} />}
      </div>
    </div>
  );
};
