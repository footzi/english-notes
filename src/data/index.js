import INTERVIEW from './interview.json';
import COMMON from './common.json';
import CATEGORIES from './categories.json';
import { nanoid } from 'nanoid';

const questions = {
  common: COMMON,
  interview: INTERVIEW,
};

const prepareQuestions = (questions) => {
  const filteredQuestions = questions.filter((question) => Boolean(question.question));

  return filteredQuestions.reverse().map((item, index) => {
    return {
      id: nanoid(),
      index: filteredQuestions.length - index,
      ...item,
    };
  });
};

export const getData = () => {
  const categories = CATEGORIES.map((category) => {
    return {
      ...category,
      questions: prepareQuestions(questions[category.id]),
    };
  });

  return {
    categories,
  };
};
