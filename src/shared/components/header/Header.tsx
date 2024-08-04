import MarvelLogo from '@/assets/images/marvel_logo.svg';

import { FavoritesCounter } from '../favoriteCounter/FavoritesCounter';
import * as styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src={MarvelLogo} alt="Marvel Logo" width={130} height={52}/>                
            </div>
            <FavoritesCounter />
        </header>
    );
}