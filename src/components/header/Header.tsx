import { useNavigate } from 'react-router-dom';
import { useHeroesContext } from '@/hooks';
import { FavoritesCounter } from '../favoriteCounter';
import { Logo } from '../logo';
import { Paths } from '@/routes/paths';
import * as styles from './header.module.scss';

export const Header = () => {
    const navigate = useNavigate();
    const { state: { favoriteHeroes }, setShowFavorites } = useHeroesContext();
    
    const navigateHome = (showFavorites: boolean) => {
        setShowFavorites(showFavorites);
        navigate(Paths.base);
    }

    return (
        <header className={styles.header}>
            <Logo onClick={() => navigateHome(false)} />
            <FavoritesCounter totalFavorites={favoriteHeroes.length} onClickFavorites={() => navigateHome(true)} />
        </header>
    );
}