import INTERVIEW from './interview.json';
import COMMON from './common.json';
import CATEGORIES from './categories.json';
import DR_JEKYLL_BOOK from './dr-jekyll-book.json';
import TRAITS from './traits.json';
import IN_ON_AT from './in-on-at.json';
import NUMBERS from './numbers.json';
import IRREGULAR_VERBS from './irregular-verbs.json';
import COMPARATIVES from './comparatives.json';
import OXFORD_WORDS from './oxford-words-a2-b1.json';
import SUPERLATIVES from './superlatives.json';
import { nanoid } from 'nanoid';

const questions = {
  common: COMMON,
  numbers: NUMBERS,
  interview: INTERVIEW,
  drJekyllBook: DR_JEKYLL_BOOK,
  traits: TRAITS,
  inOnAt: IN_ON_AT,
  irregularVerbs: IRREGULAR_VERBS,
  comparatives: COMPARATIVES,
  oxfordWords: OXFORD_WORDS,
  superlatives: SUPERLATIVES,
};

const prepareQuestions = (questions) => {
  const filteredQuestions = questions.filter((question) => Boolean(question.question));

  return filteredQuestions.map((item, index) => {
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
    const source = questions[category.id];
    // todo убрать после обновления типов
    const sentences = source?.sentences ?? source ?? [];

    return {
      ...category,
      questions: prepareQuestions(sentences),
      grammar: source?.grammar ?? {},
    };
  });

  return {
    categories,
  };
};
