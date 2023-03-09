import Header from '@/ui/components/global/Header';
import Player from '@/ui/components/global/Player';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [music, setMusic] = useState([]);

  const track = {
    id: 1,
    author: 'Marin Garrix & Calvin Sparks',
    name: 'Summer Days',
    src: '/audio/martin.mp3',
  };

  const apiUrl = 'https://api.dless.ru/api';
  const token =
    '0690a355926f5ca9ec06ec6ab069eb4df4ff314b45a3106d54658e956482374a3f6df9b1725dcc385c923c551283eb55975fdac143b9910b7f7a33fd3c1ac315d8f2845a8f84010f1ff519a896cee80e03d8173cf96a50eefd0eb4d26a13bb358f9cb18b80139fe0219cb1368dcb5b75d3471a34f85a51b5097a71ab313dc285';

  useEffect(() => {
    fetch(`${apiUrl}/audios`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      setMusic(await response.json());
    });
  }, []);

  const style = {
    li: {
      padding: '10px 0',
    },
  };

  const auth = (e) => {
    e.preventDefault();

    const parms = {
      identifier: 'test@dless.ru',
      password: 'Test12345',
    };

    fetch(`${apiUrl}/auth/local`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(parms),
    });
  };

  const regs = (e) => {
    e.preventDefault();

    const parms = {
      username: 'Krylov',
      email: 'krylov@dless.com',
      password: 'Krylov12345',
    };

    fetch(`${apiUrl}/auth/local/register`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(parms),
    });
  };

  return (
    <>
      <div className='wrapper'>
        <Header />
        {children}

        <div className='container'>
          <form onSubmit={auth}>
            <input type='text' name='identifier' />
            <input type='text' name='password' />
            <button type='submit'>Войти</button>
          </form>

          <form onSubmit={regs}>
            <input type='text' name='username' />
            <input type='text' name='email' />
            <input type='text' name='password' />
            <button type='submit'>Зарегестрироваться</button>
          </form>

          <h1>Test API audio</h1>
          <ul>
            {music?.data?.map(({ id, attributes: { author, name, path } }) => (
              <li key={id} style={style.li}>
                <p>
                  <strong>{author}</strong> - {name}
                </p>
                <audio src={`https://api.dless.ru${path}`} controls></audio>
              </li>
            ))}
          </ul>
        </div>

        <Player track={track} />
      </div>
    </>
  );
}
