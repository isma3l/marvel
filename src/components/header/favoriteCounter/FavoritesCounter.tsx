import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import * as styles from './favoritesCounter.module.scss';
import { useHeroesContext } from "@/hooks";

export const FavoritesCounter = () => {
    const { state: { favoriteHeroes } } = useHeroesContext();

    return (
        <div className={styles.favoritesCounter}>
            <Link to="/favorites" className={styles.favoritesCounter__icon}>
                <FcLike size={24} />
            </Link>          
            <span className={styles.favoritesCounter__counter}>{favoriteHeroes.length}</span>
        </div>
    );
};