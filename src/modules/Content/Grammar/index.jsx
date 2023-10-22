import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

export const Grammar = ({ grammar }) => {
  const { src, layout } = grammar;

  if (!src?.length) {
    return <h1>Пока пусто</h1>;
  }

  const cnImage = cn(styles.image, {
    [styles['image_vertical']]: layout === 'vertical',
  });

  return (
    <>
      {src.map((item) => (
        <img key={item} className={cnImage} src={item} alt="" />
      ))}
    </>
  );
};
