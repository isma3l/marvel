import { FcLike } from "react-icons/fc";
// import { FaRegHeart } from "react-icons/fa";
//             <FaRegHeart color="white" size={18} />

import { Hero } from "@/shared/models";

import * as styles from './herocard.module.scss';

type CardProps = {
    hero: Hero;
}

export const HeroCard = ({ hero }: CardProps) => {
    return (
        <article className={styles.card}>
            <header className={styles.card__header} >
                <figure className={styles.card__imgWrapper}>
                    <img src={hero.thumbail} alt="Hero image" className={styles.card__thumbail} />
                </figure>
            </header>
            <section className={styles.card__content}>
                <span className={styles.card__title}>{hero.name}</span>
                <FcLike size={12}/>
            </section>
        </article>
    );
}