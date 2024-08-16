import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import * as styles from './favoritesCounter.module.scss';
import { useHeroesContext } from '@/hooks';

export const FavoritesCounter = () => {
  const {
    state: { favoriteHeroes }
  } = useHeroesContext();

  return (
    <div className={styles.favoritesCounter}>
      <Link
        to="/favorites"
        className={styles.favoritesCounter__icon}
        aria-label="link to favorites"
      >
        <FcLike size={24} />
      </Link>
      <span
        className={styles.favoritesCounter__counter}
        aria-label={`${favoriteHeroes.length} favorites`}
      >
        {favoriteHeroes.length}
      </span>
    </div>
  );
};
