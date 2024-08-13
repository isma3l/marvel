import { HeroList, SearchBar, Spinner } from "@/components";
import { useSearchHeroes } from '@/hooks';
import { Status } from "@/types";
import * as styles from './home.module.scss';

const Home = () => {
    const { heroes, searchHeroes, status, showFavorites } = useSearchHeroes();

    if (status === Status.ERROR) return (<h1>Intentalo mas tarde. Ocurrió un error.</h1>);

    return (
        <section className={styles.content}>
            { showFavorites && <h1 className={styles.content__title}>FAVORITES</h1> }
            <SearchBar onSearch={searchHeroes} results={heroes.length}/>
            { status === Status.PENDING 
                ? <Spinner />
                : <HeroList heroes={heroes} /> 
            }
        </section>
    );
}

export default Home;