import { useEffect, useState } from "react"

export default function Player() {
  const [audio, setAudio] = useState(null)
  const [isPlay, setIsPlay] = useState(true)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    setAudio(new Audio('/audio/test.mp3'))
  }, [])

  const play = () => {
    setIsPlay(!isPlay)

    if (isPlay) {
      audio.addEventListener("timeupdate", () => {
        let pr = audio.currentTime / audio.duration * 100

        setPercentage(pr)

        if ( pr >= 100 ) {
          audio.currentTime = 0
          audio.pause()
          setIsPlay(true)
        }
      });

      audio.play()
      return
    }

    audio.pause()
  }


  return (
    <>
      <div className='player'>
        <div className="player-bar">
          <div className="player-bar__progress">
            <style jsx>{`
              .player-bar__progress {
                width: ${percentage}%
              }
            `}</style>
          </div>
        </div>

				<div className='container'>
          <div className='player-box'>
            <div className={`player-box__play ${!isPlay ? 'active' : ''}`} onClick={play}></div>
            <div className="player-box__body">
              <strong>Author</strong> - names
              <span>00:00 - 00:00</span>
            </div>
          </div>
        </div>
			</div>
    </>
  )
}