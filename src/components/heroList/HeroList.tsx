import { Hero } from "@/domain";
import { HeroCard } from "./heroCard/HeroCard";
import * as styles from './herolist.module.scss';

type HeroListProps = {
    heroes: Hero[];
}

export const HeroList = ({ heroes }: HeroListProps) => {
    return (
        <section className={styles.heroList} role='list' aria-label='List of Heroes'>
            { heroes.map((hero) => (<HeroCard hero={hero} key={hero.id} />)) }
        </section>
        
    );
}