import React, { useEffect, useRef, useState } from 'react';
import { Question } from './Question/index.jsx';

export const Tasks = ({ questions }) => {
  const [filteredQuestions, setQuestions] = useState(questions);
  const [lastAnsweredQuestion, setLastAnsweredQuestion] = useState(null);
  const containerRef = useRef(null);

  const focusElement = () => {
    setTimeout(() => {
      const firstInput = containerRef?.current.querySelectorAll('input')[0];

      if (firstInput) {
        firstInput.focus();
      }
    }, 0);
  };

  const onOk = (id) => {
    const questions = filteredQuestions.filter((item) => item.id !== id);
    const question = filteredQuestions.find((item) => item.id === id);

    setQuestions(questions);
    setLastAnsweredQuestion(question);

    focusElement();
  };

  const onCancel = () => {
    const questions = [lastAnsweredQuestion, ...filteredQuestions];
    setQuestions(questions);

    focusElement();
  };

  useEffect(() => {
    setQuestions(questions);
  }, [questions]);

  useEffect(() => {
    const handleCancel = (event) => {
      if (event.key === 'Escape' && lastAnsweredQuestion) {
        onCancel();
      }
    };

    containerRef?.current?.addEventListener('keydown', handleCancel);

    return () => containerRef?.current?.removeEventListener('keydown', handleCancel);
  }, [containerRef, lastAnsweredQuestion]);

  return (
    <div ref={containerRef}>
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
