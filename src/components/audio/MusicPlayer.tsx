import { useEffect } from 'react';
import { Howl } from 'howler';

interface MusicPlayerProps {
  src: string;
}

const MusicPlayer = ({ src }: MusicPlayerProps) => {
  useEffect(() => {
    const sound = new Howl({
      src: [src],
      autoplay: true,
      loop: true,
      volume: 0.4,
    });

    sound.play();

    return () => {
      sound.unload();
    };
  }, [src]);

  return null;
};

export default MusicPlayer;
