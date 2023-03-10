import Header from '@/ui/components/global/Header';
import Player from '@/ui/components/global/Player';
import Preloader from '@/ui/components/global/Preloader'

export default function Layout({ children }) {
  const track = {
    id: 1,
    author: 'Marin Garrix & Calvin Sparks',
    name: 'Summer Days',
    src: '/audio/martin.mp3',
  };

  return (
    <div>
      <Header />
      {children}

      <div className='container'>
        <Preloader />
      </div>

      <Player track={track} />
    </div>
  );
}
