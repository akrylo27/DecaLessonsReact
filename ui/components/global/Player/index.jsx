import { useEffect, useState } from 'react';
import { AudioInit, AudioTime } from './audio'

import styles from '@/ui/components/global/Player/Player.module.scss'

export default function Player({ track }) {
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [fullTime, setfullTime] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  const [currentTimeMove, setCurrentTimeMove] = useState('00:00');

  useEffect(() => {
    setAudio(AudioInit(track.src));
  }, []);

  const audioTimeUpdate = () => {
    audio.addEventListener('timeupdate', () => {
      let pr = (audio.currentTime / audio.duration) * 100;
      setfullTime(AudioTime(audio.duration));
      setCurrentTime(AudioTime(audio.currentTime));
      setPercentage(pr);
    });

    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      setIsPlay(true);
    })
  };

  const play = () => {
    setIsPlay(!isPlay);

    if (isPlay) {
      audioTimeUpdate();
      audio.play();
      return;
    }

    audio.pause();
  };

  const rewind = (e) => {
    const rect = e.target.getBoundingClientRect();
    const pageX = e.pageX;
    const rewind = (pageX / rect.width) * audio.duration;

    audio.currentTime = rewind;
    audioTimeUpdate();
  };

  const rewindMove = (e) => {
    const elem = document.querySelector("#player")
    const rect = elem.getBoundingClientRect();

    setCurrentTimeMove(AudioTime((e.pageX / rect.width) * audio.duration))
    elem.children[0].children[0].style.width = `${(e.pageX / rect.width) * 100}%`
  };

  useEffect(() => {
    const keyCode = (e) => {
      if (e.keyCode === 32) {
        play();
      }
    };

    document.addEventListener('keydown', keyCode);
    return () => document.removeEventListener('keydown', keyCode);
  }, [audio, isPlay]);

  return (
    <>
      <div className={styles.player} id="player" onMouseMove={rewindMove}>
        <div className={styles.playerBar} onClick={rewind}>
          <div className={styles.playerBar__progressMove} time={currentTimeMove}></div>
          <div className={styles.playerBar__progress} style={{width: `${percentage}%`}}></div>
        </div>

        <div className='container'>
          <div className={styles.playerBox}>
            <div className={`${styles.playerBox__play} ${!isPlay ? styles.active : ''}`} onClick={play}></div>
            <div className={styles.playerBox__body}>
              <strong>{track.author}</strong> - {track.name}
              <span>
                {currentTime} / {fullTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
