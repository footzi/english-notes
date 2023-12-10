import { useEffect, useRef, useState } from 'react';

export const usePlayAudio = () => {
  const audioRef = useRef(null);
  const [playingSrc, setPlayingSrc] = useState(null);

  const play = (src) => {
    if (!audioRef.current) {
      return;
    }

    if (playingSrc) {
      audioRef.current.pause();

      setPlayingSrc(null);
    } else {
      audioRef.current.src = src;
      audioRef.current.play();

      setPlayingSrc(src);
    }
  };

  useEffect(() => {
    const audioElement = document.createElement('audio');
    const sourceElement = document.createElement('source');
    sourceElement.src = '';
    sourceElement.type = 'audio/mpeg';

    audioElement.appendChild(sourceElement);
    document.body.appendChild(audioElement);
    audioRef.current = audioElement;

    return () => {
      document.body.removeChild(audioElement);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      const fn = () => {
        setPlayingSrc(null);
      };

      audioRef.current.addEventListener('ended', fn);

      return () => audioRef.current.removeEventListener('ended', fn);
    }
  }, [audioRef.current]);

  return {
    play,
    playingSrc,
  };
};
