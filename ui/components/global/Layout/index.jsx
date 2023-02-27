import Header from '@/ui/components/global/Header'
import Player from '@/ui/components/global/Player';

export default function Layout({ children }) {
  const track = {
    id: 1,
    author: 'Pham feat. Filip',
    name: 'Squaad',
    src: '/audio/pham.mp3',
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        { children }

        <Player track={track} />
      </div>
    </>
  )
}