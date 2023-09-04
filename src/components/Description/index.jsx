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

export const Description = ({ questions }) => {
  return (
    <ul>
      {questions.map(({ id, question, answer, index, tasks }) => {
        const answerRender = getStringForRender(answer, tasks);

        return (
          <li className={styles.item} key={id}>
            {index}. {question}
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
