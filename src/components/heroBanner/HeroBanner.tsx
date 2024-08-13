import { Hero } from "@/domain";
import { ToggleFavorite } from "../toggleFavorite";
import * as styles from './heroBanner.module.scss';

type HeroBannerProps = {
    hero: Hero;
}

export const HeroBanner = ({ hero }: HeroBannerProps ) => {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__content}>
                <figure className={styles.banner__thumWrapper}>
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}  alt="Hero image" className={styles.banner__thumbnail} />
                </figure>
                <article className={styles.banner__contentDescription}>
                    <div className={styles.banner__contentTitle}>
                        <h1 className={styles.banner__title}>{hero.name}</h1>
                        <ToggleFavorite hero={hero} size={24} />   
                    </div>
                    <span className={styles.banner__description}>{hero.description}</span>
                </article>
            </div>
        </section>
    );
}