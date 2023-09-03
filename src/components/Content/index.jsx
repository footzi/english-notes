import React, { useEffect, useRef, useState } from 'react';
import { Question } from '../Question/index.jsx';
import styles from './index.module.css';

export const Content = ({ questions }) => {
  const [filteredQuestions, setQuestions] = useState(questions);
  const containerRef = useRef(null);

  const onOk = (id) => {
    setQuestions(() => filteredQuestions.filter((item) => item.id !== id));

    setTimeout(() => {
      const firstInput = containerRef?.current.querySelectorAll('input')[0];

      if (firstInput) {
        firstInput.focus();
      }
    }, 100);
  };

  useEffect(() => {
    setQuestions(questions);
  }, [questions]);

  return (
    <div className={styles.container} ref={containerRef}>
      {filteredQuestions.length > 0 ? (
        <>
          {filteredQuestions.map((question) => (
            <Question key={question.id} {...question} onOk={onOk} />
          ))}
        </>
      ) : (
        <h1>Empty</h1>
      )}
    </div>
  );
};
