import { useEffect, useState } from "react"

export default function Player({ track }) {
  const [audio, setAudio] = useState(null)
  const [isPlay, setIsPlay] = useState(true)
  const [percentage, setPercentage] = useState(0)
  const [fullTime, setfullTime] = useState("00:00")
  const [currentTime, setCurrentTime] = useState("00:00")

  useEffect(() => {
    setAudio(new Audio(track.src))
  }, [])

  const audioTimeUpdate = () => {
    audio.addEventListener("timeupdate", () => {
      let pr = (audio.currentTime / audio.duration) * 100
      setfullTime(getTimerMusic(audio.duration))
      setCurrentTime(getTimerMusic(audio.currentTime))
      setPercentage(pr)

      if (pr >= 100) {
        audio.currentTime = 0
        audio.pause()
        setIsPlay(true)
      }
    })
  }

  const play = () => {
    setIsPlay(!isPlay)

    if (isPlay) {
      audioTimeUpdate()
      audio.play()
      return
    }

    audio.pause()
  }

  const getTimerMusic = (time) => {
    let hour = Math.floor(time / (60 * 60)),
      resultMinutes = time % (60 * 60),
      minute = Math.floor(resultMinutes / 60),
      resultSeconds = resultMinutes % 60,
      second = Math.ceil(resultSeconds),
      fullTime

    if (second === 60) {
      second = 0
      minute = minute + 1
    }
    if (second < 10) {
      second = "0" + second
    }
    if (minute === 60) {
      minute = 0
      hour = hour + 1
    }
    if (minute < 10) {
      minute = "0" + minute
    }
    if (hour === 0) {
      fullTime = minute + ":" + second
    } else {
      fullTime = hour + ":" + minute + ":" + second
    }
    return fullTime
  }

  const rewind = (e) => {
    const rect = e.target.getBoundingClientRect()
    const pageX = e.pageX
    const rewind = (pageX / rect.width) * audio.duration

    audio.currentTime = rewind
    audioTimeUpdate()
  }

  useEffect(() => {
    const keyCode = (e) => {
      if (e.keyCode === 32) {
        play()
      }
    }

    document.addEventListener("keydown", keyCode)
    return () => document.removeEventListener("keydown", keyCode)
  }, [audio, isPlay])

  return (
    <>
      <div className="player">
        <div className="player-bar" onClick={rewind}>
          <div className="player-bar__progress">
            <style jsx>{`
              .player-bar__progress {
                width: ${percentage}%;
              }
            `}</style>
          </div>
        </div>

        <div className="container">
          <div className="player-box">
            <div
              className={`player-box__play ${!isPlay ? "active" : ""}`}
              onClick={play}
            ></div>
            <div className="player-box__body">
              <strong>{track.author}</strong> - {track.name}
              <span>
                {currentTime} dsdsds/ {fullTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
