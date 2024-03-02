import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

export const Grammar = ({ grammar }) => {
  const { src, layout, images } = grammar;

  if (!src?.length && !images?.length) {
    return <h1>Пока пусто</h1>;
  }

  if (images?.length) {
    return (
      <>
        {images.map((item) => {
          const cnImage = cn(styles.image, {
            [styles['image_vertical']]: item.layout === 'vertical',
          });
          return <img key={item.src} className={cnImage} src={item.src} alt="" />;
        })}
      </>
    );
  }

  // @todo deprecated
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
