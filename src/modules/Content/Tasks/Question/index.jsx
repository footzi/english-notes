import React, { useMemo, useState } from 'react';
import cn from 'classnames';

import styles from './index.module.css';
import { Button } from '../../../../components/Button';
import { FaCircleCheck } from 'react-icons/fa6';
import { AudioButton } from '../../../../components/AudioButton/index.jsx';

const getWidthForInput = (word) => {
  return word.length * 10;
};

const getStringForRender = (id, answer, tasks, handleChangeInput) => {
  return answer.split(' ').map((word, index) => {
    if (tasks.includes(word)) {
      const width = getWidthForInput(word);

      const inputId = `${id}.${index}`;

      return (
        <input
          id={inputId}
          name={inputId}
          key={inputId}
          className={styles.input}
          type="text"
          autoComplete="off"
          style={{ width: `${width}px` }}
          onChange={(event) => handleChangeInput(event, index)}
        />
      );
    } else {
      return word;
    }
  });
};

const checkAnswer = (answer, answers, tasks) => {
  const resultString = answer
    .split(' ')
    .map((word, index) => {
      if (tasks.includes(word)) {
        return answers[index];
      }
      return word;
    })
    .join(' ');

  return resultString.toUpperCase() === answer.toUpperCase();
};

export const Question = ({ id, question, answer, tasks, onOk, sound, onPlay, playingSrc }) => {
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleClickQuestion = () => setIsShowAnswer(!isShowAnswer);

  const handleChangeInput = (event, id) => {
    const { value } = event.currentTarget;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value.trim(),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isOk = checkAnswer(answer, answers, tasks);
    setIsWrong(!isOk);

    if (isOk) {
      onOk(id);
    }
  };

  const renderString = useMemo(() => getStringForRender(id, answer, tasks, handleChangeInput), []);

  const cnTask = cn(styles.task, {
    [styles['task_is-wrong']]: isWrong,
  });

  if (!question) {
    return null;
  }

  return (
    <form className={styles.item} onSubmit={handleSubmit}>
      <div className={styles.question} onClick={handleClickQuestion}>
        {question}
      </div>

      {isShowAnswer && <div className={styles.answer}>{answer}</div>}

      <div className={cnTask}>
        <span>
          {renderString.map((item, index) => (
            <React.Fragment key={index}> {item} </React.Fragment>
          ))}
        </span>

        <Button Icon={FaCircleCheck} ariaLabel="Ответить" type="submit" />

        {sound && <AudioButton src={playingSrc} sound={sound} onPlay={onPlay} />}
      </div>
    </form>
  );
};
