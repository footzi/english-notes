import INTERVIEW from './interview.json';
import COMMON from './common.json';
import CATEGORIES from './categories.json';
import DR_JEKYLL_BOOK from './dr-jekyll-book.json';
import TRAITS from './traits.json';
import IN_ON_AT from './in-on-at.json';
import { nanoid } from 'nanoid';

const questions = {
  common: COMMON,
  interview: INTERVIEW,
  drJekyllBook: DR_JEKYLL_BOOK,
  traits: TRAITS,
  inOnAt: IN_ON_AT,
};

const prepareQuestions = (questions) => {
  const filteredQuestions = questions.filter((question) => Boolean(question.question));

  return filteredQuestions.reverse().map((item, index) => {
    return {
      id: nanoid(),
      // todo remove?
      index: index + 1,
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
