import { Comic } from "@/domain"
import * as styles from './comicItem.module.scss';

type ComicItemProps = {
    comic: Comic;
}

export const ComicItem = ({ comic }: ComicItemProps) => {
    return (
        <div className={styles.comic}>
            <figure className={styles.comic__thumWrapper}>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Comic image" className={styles.comic__thumbnail} />
            </figure>
            <span className={styles.comic__title}>{comic.title}</span>
            <span className={styles.comic__year}>{comic.modified}</span>
        </div>
    );
}