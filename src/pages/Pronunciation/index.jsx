import React from 'react';
import { FaCirclePlay, FaCirclePause } from 'react-icons/fa6';
import { Button } from '../../components/Button/index.jsx';
import DATA from '../../data/pronunciation/index.json';
import styles from './index.module.css';
import { usePlayAudio } from '../../modules/hooks/usePlayAudio.js';

const prepareData = () => {
  return DATA.groups.map((group) => {
    return {
      ...group,
      values: DATA.values.filter((item) => item.groupId === group.id),
    };
  });
};

export const PronunciationPage = () => {
  const data = prepareData();

  const { play, playingSrc } = usePlayAudio();

  return (
    <main className={styles.container}>
      <ul className={styles['list-wrapper']}>
        {data.map((group) => {
          return (
            <li key={group.id} className={styles['item-wrapper']}>
              <h2>{group.name}</h2>

              <ul className={styles.list}>
                {group.values.map((item) => {
                  if (!item.name) {
                    return;
                  }

                  return (
                    <li key={item.name} className={styles['list-item']}>
                      <div className={styles.item}>
                        <b>{item.name}</b> - <i>{item.description}</i>
                        <Button
                          Icon={playingSrc === item.sound ? FaCirclePause : FaCirclePlay}
                          onClick={() => play(item.sound)}
                        />
                      </div>

                      <div className={styles.examples}>
                        {item.examples?.map((example, index) => {
                          const string = index === 0 ? `${example.name}` : `, ${example.name}`;

                          return <React.Fragment key={example.name}>{string}</React.Fragment>;
                        })}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
