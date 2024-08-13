import { HeroList, SearchBar } from "@/components";
import { useSearchFavoriteHeroes } from '@/hooks';
import * as styles from './favorites.module.scss';

const Favorites = () => {
    const { heroes, searchHeroes } = useSearchFavoriteHeroes();

    return (
        <section className={styles.content}>
            <h1 className={styles.content__title}>FAVORITES</h1>
            <SearchBar onSearch={searchHeroes} results={heroes.length}/>
            <HeroList heroes={heroes} /> 
        </section>
    );
}

export default Favorites;