import { useEffect, useState } from 'react';
import { shuffleArray } from '../../utils/shuffleArray.js';
import { ascArray } from '../../utils/ascArray.js';
import { descArray } from '../../utils/descArray.js';

export const useControls = (dataQuestions) => {
  const [questions, setQuestions] = useState(dataQuestions);
  const [descriptions, setDescriptions] = useState(dataQuestions);
  const [isRandom, setIsRandom] = useState(false);
  const [isReverse, setIsReverse] = useState(false);

  const updateQuestion = (questions, isRandom, isReverse) => {
    if (isRandom) {
      setQuestions(shuffleArray(questions));
    } else if (isReverse) {
      setQuestions(descArray(questions));
    } else {
      setQuestions(ascArray(questions));
    }
  };

  const updateDescriptions = (descriptions, isReverse) => {
    if (isReverse) {
      setDescriptions(descArray(descriptions));
    } else {
      setDescriptions(ascArray(descriptions));
    }
  };

  const onReverse = () => {
    const value = !isReverse;
    setIsReverse(value);

    updateDescriptions(descriptions, value);
    updateQuestion(questions, isRandom, value);
  };

  const onRandom = () => {
    const value = !isRandom;
    setIsRandom(value);

    updateQuestion(questions, value);
  };

  useEffect(() => {
    updateQuestion(dataQuestions, isRandom, isReverse);
    updateDescriptions(dataQuestions, isReverse);
  }, [dataQuestions]);

  return {
    isRandom,
    isReverse,
    onReverse,
    onRandom,
    questions,
    descriptions,
  };
};
