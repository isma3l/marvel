import { HeroList, SearchBar, Spinner } from "@/components";
import { useSearchHeroes } from '@/hooks';

import * as styles from './home.module.scss';

const Home = () => {
    const { heroes, searchHeroes, isLoading, showFavorites } = useSearchHeroes();

    return (
        <section className={styles.content}>
            { showFavorites && <h1 className={styles.content__title}>FAVORITES</h1> }
            <SearchBar onSearch={searchHeroes} results={heroes.length}/>
            { isLoading 
                ? <Spinner />
                : <HeroList heroes={heroes} /> 
            }
        </section>
    );
}

export default Home;