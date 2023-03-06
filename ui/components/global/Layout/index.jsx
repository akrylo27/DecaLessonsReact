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
    const token = '8772fc18d6e25c48aebf0274c2e977db022199dc0bde9e3c5e1fc7e9e216df31475ee2277479e194c191db2d0fb3aba2ee2e48d35ea37cdfa1b1d5fb72e415e9ed644b1c1fc676e183858323db98d8729ee0ce2d8dfacf55e7647e130ff9dc7d41e9475a30723f419a0a39f8e51b57ae20dd3086df669204fbe03a2f6209d2e5'

    fetch('https://api.dless.ru/api/audios', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(async (response) => {
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