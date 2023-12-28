import React from 'react';
import { FaCirclePause, FaCirclePlay } from 'react-icons/fa6';
import { Button } from '../Button/index.jsx';

export const AudioButton = ({ src, sound, onPlay }) => {
  return <Button Icon={src === sound ? FaCirclePause : FaCirclePlay} onClick={() => onPlay(sound)} />;
};
