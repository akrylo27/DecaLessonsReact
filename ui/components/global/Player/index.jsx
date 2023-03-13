import { useEffect, useState } from 'react';
import { AudioInit, AudioTime } from './audio'

import styles from '@/ui/components/global/Player/Player.module.scss'

export default function Player({ track, nx }) {
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const [isPlayMove, setIsPlayMove] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [fullTime, setfullTime] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  const [currentTimeMove, setCurrentTimeMove] = useState('00:00');
  const [volume, setVolume] = useState(70);
  const [volumeMove, setVolumeMove] = useState(false)
  const [isNx, setIsNx] = useState(nx)

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

      audio.volume = volume / 100
      audio.play();
      return;
    }

    audio.pause();
  };

  if ( nx != isNx ) {
    setIsNx(nx)
    audio.currentTime = 0;
    setIsPlay(true);
    audio.pause();
  }

  useEffect(() => {
    setAudio(AudioInit(track));
  }, [track]);

  const rewind = (e, active) => {
    setIsPlayMove(active)

    if (active) {
      const rect = e.target.getBoundingClientRect();
      const pageX = e.pageX;
      const rewind = (pageX / rect.width) * audio.duration;

      audio.currentTime = rewind;
      audio.muted = true
      audioTimeUpdate();
      return
    }

    audio.muted = false
  };

  const rewindMove = (e) => {
    const elem = document.querySelector("#player")
    const rect = elem.getBoundingClientRect();

    setCurrentTimeMove(AudioTime((e.pageX / rect.width) * audio.duration))
    elem.children[0].children[0].style.width = `${(e.pageX / rect.width) * 100}%`
  };

  const volumes = (e, active) => {
    setVolumeMove(active)

    if (active) {
      const rect = e.target.getBoundingClientRect();
      const offesetX = e.pageX - rect.left
      const offsetVolume = offesetX / 100

      setVolume(Math.floor(offesetX))
      audio.volume = offsetVolume < 0 ? 0 : offsetVolume
    }
  }

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
        <div
          className={styles.playerBar}
          onMouseMove={(e) => rewind(e, isPlayMove)}
          onMouseDown={(e) => rewind(e, true)}
          onMouseUp={(e) => rewind(e, false)}
          onMouseLeave={(e) => rewind(e, false)}
        >
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
            <div
              className={styles.playerVolume}
              onMouseMove={(e) => volumes(e, volumeMove)}
              onMouseDown={(e) => volumes(e, true)}
              onMouseUp={(e) => volumes(e, false)}
              onMouseLeave={(e) => volumes(e, false)}
            >
              <div className={styles.playerVolume__progress} style={{width: `${volume}%`}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
