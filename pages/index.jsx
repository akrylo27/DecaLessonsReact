import Head from 'next/head';
import Script from 'next/script';
import { fetchAPI } from '@/utils/api/fetch';
import Player from '@/ui/components/global/Player';
import { useState } from 'react';

import Top10 from '@/ui/components/Top10/Top10';
import UsersPlaylist from '@/ui/components/UsersPlaylist/UsersPlaylist';

export const getServerSideProps = async () => {
  const response = await fetchAPI('/audios');
  const audios = await response.json();

  return {
    props: { audios },
  };
};

export default function Home({ audios }) {
  const attr = audios?.data[audios?.data.length - 1];
  const [track, setTrack] = useState({ id: attr?.id, ...attr?.attributes });

  const addTrack = (id, attributes) => {
    setTrack({ id, ...attributes });
  };

  return (
    <>
      <Head>
        <title>
          {track.author} - {track.name}
        </title>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Script src='https://kit.fontawesome.com/fb72704844.js' />

      <div className='container'>
        <div className='container_main'>
          <div className='container_left'>
            <UsersPlaylist />

            {/* <ul className='list'>
              {audios &&
                audios?.data.map(({ id, attributes }) => (
                  <li key={id} onClick={() => addTrack(id, attributes)}>
                    <strong>{attributes.author}</strong> - {attributes.name}
                  </li>
                ))}
            </ul> */}
          </div>
          <div className='container_right'>
            <Top10 audios={audios} />
          </div>
        </div>

        {attr && <Player track={track} nx={track.id} />}
      </div>
    </>
  );
}
