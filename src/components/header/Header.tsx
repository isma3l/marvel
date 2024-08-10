import MarvelLogo from '@/assets/images/marvel-logo.svg';
import { FavoritesCounter } from '../favoriteCounter/FavoritesCounter';
import * as styles from './header.module.scss';
import { useHeroesContext } from '@/hooks';

export const Header = () => {
    const { state: { favoriteHeroes } } = useHeroesContext();

    return (
        <header className={styles.header}>
            <img src={MarvelLogo} alt="Marvel Logo" />
            <FavoritesCounter totalFavorites={favoriteHeroes.length} />
        </header>
    );
}