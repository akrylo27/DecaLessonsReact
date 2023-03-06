import Header from '@/ui/components/global/Header';
import Player from '@/ui/components/global/Player';
import PageMain from '../../Main/PageMain';
import Link from 'next/link';

export default function Layout({ children }) {
  const track = {
    id: 1,
    author: 'Marin Garrix & Calvin Sparks',
    name: 'Summer Days',
    src: '/audio/martin.mp3',
  };

  return (
    <>
      <div className='wrapper'>
        <Header />
        {children}
        <Player track={track} />
        <Link href='/pagemain'>Мой компонент</Link>
      </div>
    </>
  );
}
