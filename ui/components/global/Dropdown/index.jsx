import Drop from './Drop';
import Droplist from './Droplist';

import styles from '@/ui/components/global/Dropdown/Drop.module.scss';

export default function Drops() {
  const selectMusic = ['Genres', 'Categories', 'Top-charts', 'New Releases'];

  const listGenres = ['Rap', 'Rock', 'Dance', 'EDM'];
  const listCategories = ['Home', 'Work', 'Meditate', 'Party'];
  const listTops = ['Best Rap', 'Best Rock', 'Best Dance', 'Best EDM'];
  const listMyDownload = ['Song 1', 'Song 2', 'Song 3', 'Song 4'];

  return (
    <div className={styles.dropWrapper}>
      <div className={styles.dropWrapper_list}>
        <Drop selectMusic={selectMusic[0]} />
        <Drop selectMusic={selectMusic[1]} />
        <Drop selectMusic={selectMusic[2]} />
        <Drop selectMusic={selectMusic[3]} />
      </div>
      <div className={styles.dropWrapper_item}>
        <Droplist lists={listGenres} />
        <Droplist lists={listCategories} />
        <Droplist lists={listTops} />
        <Droplist lists={listMyDownload} />
      </div>
    </div>
  );
}
