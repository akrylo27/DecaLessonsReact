import Header from '@/ui/components/global/Header'
import Player from '@/ui/components/global/Player';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [music, setMusic] = useState([])

  const track = {
    id: 1,
    author: 'Marin Garrix & Calvin Sparks',
    name: 'Summer Days',
    src: '/audio/martin.mp3',
  };

  useEffect(() => {
    fetch('https://api.dless.ru/api/audios').then(async (response) => {
      setMusic(await response.json())
    })
  }, [])

  const style = {
    li: {
      padding: "10px 0"  
    }
  }

  return (
    <>
      <div className="wrapper">
        <Header />
        { children }

        <div className='container'>
          <h1>Test API audio</h1>
          <ul>
            {music?.data?.map(({ id, attributes: { author, name, path }}) => (
              <li key={id} style={style.li}>
                <p><strong>{author}</strong> - {name}</p>
                <audio src={`https://api.dless.ru${path}`} controls></audio>
              </li>
            ))}
          </ul>
        </div>

        <Player track={track} />
      </div>
    </>
  )
}