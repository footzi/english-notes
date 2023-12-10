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

                      <ul className={styles['example-list']}>
                        {item.examples?.map((example) => {
                          return (
                            <li key={example.name} className={styles['example-item']}>
                              <span>{example.name}</span>
                            </li>
                          );
                        })}
                      </ul>
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
