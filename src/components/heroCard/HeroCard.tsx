import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { Hero } from '@/domain';
import * as styles from './herocard.module.scss';
import { useHeroesContext } from "@/hooks";

type HeroProps = {
    hero: Hero;
}

export const HeroCard = ({ hero }: HeroProps) => {
    const { addHero, removeHero } = useHeroesContext();

    return (
        <article className={styles.card}>
            <header>
                <figure className={styles.card__thumWrapper}>
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="Hero image" className={styles.card__thumbail} />
                </figure>
            </header>
            <section className={styles.card__content}>
                <span className={styles.card__title}>{hero.name}</span>
                <span className={styles.card__icon}>
                    { hero.isFavorite 
                        ? <FcLike size={13} onClick={() => removeHero(hero.id)}/>
                        : <FaRegHeart color="white" size={13} onClick={() => addHero(hero)}/>
                    }                    
                </span>                
            </section>
        </article>
    );
}