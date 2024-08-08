import { FcLike } from "react-icons/fc";
// import { FaRegHeart } from "react-icons/fa";
//             <FaRegHeart color="white" size={18} />

import { Hero } from '@/domain';
import * as styles from './herocard.module.scss';

type HeroProps = {
    hero: Hero;
}

export const HeroCard = ({ hero }: HeroProps) => {
    return (
        <article className={styles.card}>
            <header>
                <figure className={styles.card__thumWrapper}>
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="Hero image" className={styles.card__thumbail} />
                </figure>
            </header>
            <section className={styles.card__content}>
                <span className={styles.card__title}>{hero.name}</span>
                <FcLike size={12}/>
            </section>
        </article>
    );
}