import { FcLike } from "react-icons/fc";
import * as styles from './favoritesCounter.module.scss';

type FavoritesCounterProps = {
    totalFavorites: number;
    onClickFavorites: () => void;
};

export const FavoritesCounter = ({ totalFavorites, onClickFavorites }: FavoritesCounterProps ) => {
    return (
        <div className={styles.favoritesCounter}>
            <span className={styles.favoritesCounter__icon}>
                <FcLike size={24} onClick={onClickFavorites} />
            </span>          
            <span className={styles.favoritesCounter__counter}>{totalFavorites}</span>
        </div>
    );
};