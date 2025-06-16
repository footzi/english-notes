import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

export const Button = ({ Icon, ariaLabel, type, isActive, onClick }) => {
  const buttonCn = cn(styles.button, {
    [styles['button_active']]: isActive,
  }); 

  return (
    <button aria-label={ariaLabel} type={type ?? 'button'} className={buttonCn} onClick={onClick}>
      {Icon && <Icon />}
    </button>
  );
};
