import React from 'react';
import { FaCircleUp, FaCircleXmark } from 'react-icons/fa6';
import { Button } from '../Button/index.jsx';

export const RememberButton = ({ onRemember, onForget, isRemembered }) => {
  return <Button Icon={isRemembered ? FaCircleUp : FaCircleXmark} onClick={() => isRemembered ? onForget() : onRemember()} />;
};
