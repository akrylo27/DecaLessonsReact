import Drop from './Drop';
import Droplist from './Droplist';

import styles from '@/ui/components/global/Dropdown/Drop.module.scss';

export default function Drops() {
  const listMusics = ['BEST NEW TRACKS', 'Genres', 'Categories', 'Top-charts'];

  const listBests = [
    '140 / DEEP DUBSTEP / GRIME',
    'AFRO HOUSE',
    'AMAPIANO',
    'BASS / CLUB',
    'BASS HOUSE',
  ];
  const listGenres = ['RAP', 'ROCK', 'EDM', 'ALTERNATIVE', 'CLUB'];
  const listCategories = ['HOME', 'WORK', 'MEDITATE', 'PARTY', 'SLEEP'];
  const listTops = [
    'BEST RAP',
    'BEST ROCK',
    'BEST DANCE',
    'BEST EDM',
    'BEST CLUB',
  ];

  const selectMusic = listMusics.map((music, index) => {
    return <Drop key={index} selectMusic={music} />;
  });
  const selectBests = listBests.map((best, index) => {
    return <Droplist key={index} lists={best} />;
  });
  const selectGenres = listGenres.map((genre, index) => {
    return <Droplist key={index} lists={genre} />;
  });
  const selectCategories = listCategories.map((categorie, index) => {
    return <Droplist key={index} lists={categorie} />;
  });
  const selectTops = listTops.map((top, index) => {
    return <Droplist key={index} lists={top} />;
  });

  return (
    <div className={styles.dropWrapper}>
      <div className={styles.dropTitle_list}>{selectMusic}</div>
      <div className={styles.dropTitle_item}>
        <div className={styles.dropList_item}>{selectBests}</div>
        <div className={styles.dropList_item}>{selectGenres}</div>
        <div className={styles.dropList_item}>{selectCategories}</div>
        <div className={styles.dropList_item}>{selectTops}</div>
      </div>
    </div>
  );
}
