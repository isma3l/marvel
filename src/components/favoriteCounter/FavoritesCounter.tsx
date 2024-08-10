import { FcLike } from "react-icons/fc";
import * as styles from './favoritesCounter.module.scss';

type FavoritesCounterProps = {
    totalFavorites: number;
};

export const FavoritesCounter = ({ totalFavorites }: FavoritesCounterProps ) => {
    return (
        <div className={styles.favoritesCounter}>
            <FcLike size={24} />
            <span className={styles.favoritesCounter__counter}>{totalFavorites}</span>
        </div>
    );
};