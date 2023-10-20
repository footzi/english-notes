import React from 'react';
import styles from './index.module.css';

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
  return (
    <ul>
      {descriptions.map(({ id, question, answer, tasks }) => {
        const answerRender = getStringForRender(answer, tasks);

        return (
          <li className={styles.item} key={id}>
            {question}
            <div className={styles.answer}>
              {answerRender.map((item, index) => {
                return <React.Fragment key={index}> {item} </React.Fragment>;
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};