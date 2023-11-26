import React, { useRef } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import { Button } from '../../components/Button/index.jsx';
import DATA from '../../data/pronunciation/index.json';
import styles from './index.module.css';

export const PronunciationPage = () => {
  const ref = useRef(null);

  const handlePlay = (src) => {
    const audio = ref?.current;

    if (audio) {
      audio.src = src;
      audio.play();
    }
  };

  return (
    <main className={styles.container}>
      <audio id="myAudio" ref={ref}>
        <source src="" type="audio/mpeg" />
      </audio>

      <ul className={styles.list}>
        {DATA.map((item) => {
          if (!item.name) {
            return;
          }

          return (
            <li key={item.name} className={styles['list-item']}>
              <div className={styles.item}>
                <b>{item.name}</b> - <i>{item.description}</i>
                <Button Icon={FaCirclePlay} onClick={() => handlePlay(item.sound)} />
              </div>

              <ul className={styles['example-list']}>
                {item.examples?.map((example) => {
                  return (
                    <li key={example.name} className={styles['example-item']}>
                      <span>{example.name}</span>
                      {example.sound && <Button Icon={FaCirclePlay} onClick={() => handlePlay(example.sound)} />}
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
