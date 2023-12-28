import React from 'react';
import styles from './index.module.css';
import { usePlayAudio } from '../../hooks/usePlayAudio.js';
import { AudioButton } from '../../../components/AudioButton/index.jsx';

const getStringForRender = (answer, tasks) => {
  return answer.split(' ').map((word, index) => {
    if (tasks.includes(word)) {
      return <b key={index}>{word}</b>;
    } else {
      return word;
    }
  });
};

export const Description = ({ descriptions }) => {
  const { play, playingSrc } = usePlayAudio();

  return (
    <ul>
      {descriptions.map(({ id, question, answer, tasks, sound }) => {
        const answerRender = getStringForRender(answer, tasks);

        return (
          <li className={styles.item} key={id}>
            {question}
            <div className={styles.answer}>
              <>
                {answerRender.map((item, index) => {
                  return <React.Fragment key={index}> {item} </React.Fragment>;
                })}

                {sound && <AudioButton src={playingSrc} sound={sound} onPlay={play} />}
              </>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
