import { useEffect, useState } from 'react';
import styles from '@/ui/components/global/Player/Player.module.scss'

export default function Player({ track }) {
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [fullTime, setfullTime] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  const [currentTimeMove, setCurrentTimeMove] = useState('00:00');

  useEffect(() => {
    setAudio(new Audio(track.src));
  }, []);

  const audioTimeUpdate = () => {
    audio.addEventListener('timeupdate', () => {
      let pr = (audio.currentTime / audio.duration) * 100;
      setfullTime(getTimerMusic(audio.duration));
      setCurrentTime(getTimerMusic(audio.currentTime));
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

  const getTimerMusic = (time) => {
    let hour = Math.floor(time / (60 * 60)),
      resultMinutes = time % (60 * 60),
      minute = Math.floor(resultMinutes / 60),
      resultSeconds = resultMinutes % 60,
      second = Math.ceil(resultSeconds),
      fullTime;

    if (second === 60) {
      second = 0;
      minute = minute + 1;
    }
    if (second < 10) {
      second = '0' + second;
    }
    if (minute === 60) {
      minute = 0;
      hour = hour + 1;
    }
    if (minute < 10) {
      minute = '0' + minute;
    }
    if (hour === 0) {
      fullTime = minute + ':' + second;
    } else {
      fullTime = hour + ':' + minute + ':' + second;
    }
    return fullTime;
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

    setCurrentTimeMove(getTimerMusic((e.pageX / rect.width) * audio.duration))
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
