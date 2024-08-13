import { Link } from "react-router-dom";
import { Hero } from '@/domain';
import { ToggleFavorite } from "../../toggleFavorite";
import * as styles from './herocard.module.scss';

type HeroProps = {
    hero: Hero;
}

export const HeroCard = ({ hero }: HeroProps) => {
    return (
        <Link to={`/hero/${hero.id}`}>
            <article className={styles.card}>
                <figure className={styles.card__thumWrapper}>
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="Hero image" className={styles.card__thumbnail} />
                </figure>
                <section className={styles.card__content}>
                    <span className={styles.card__title}>{hero.name}</span>
                    <ToggleFavorite hero={hero} size={13} />              
                </section>
            </article>
        </Link>        
    );
}