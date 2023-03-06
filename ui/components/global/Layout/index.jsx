import Header from '@/ui/components/global/Header';
import Player from '@/ui/components/global/Player';
import Navigation from '../../Navigation/Navigation';

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
        <Navigation />
        <Player track={track} />
      </div>
    </>
  );
}
