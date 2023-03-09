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
    '91bf688e104b4f9e306f9bf3b3d8c027907290568bda112aee3552b5d7411a737780918988771cf811d338aa644f72311bb1b25c3357e000b43ed3fa9f0401e46efb7e846c685382ee6c0af8254f1b1a506df85389e4e59d75ed46942897cd3dc3952c818307f6a2500f344cdff2c5537f4ac6433bc20f56152edc2688ce2b57';

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
