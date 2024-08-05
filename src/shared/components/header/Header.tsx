import MarvelLogo from '@/assets/images/marvel-logo.svg';

import { FavoritesCounter } from '../favoriteCounter/FavoritesCounter';
import * as styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={MarvelLogo} alt="Marvel Logo" />
            <FavoritesCounter />
        </header>
    );
}