import { FcLike } from "react-icons/fc";

import * as styles from './favoritesCounter.module.scss';

export const FavoritesCounter = () => {
    return (
        <div className={styles.favoritesCounter}>
            <FcLike size={24} />
            <span className={styles.favoritesCounter__counter}>3</span>
        </div>
    );
};