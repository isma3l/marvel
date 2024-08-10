import { HeroList, SearchBar, Spinner } from "@/components";
import { Hero } from "@/domain";
import { useSearchHerores } from '@/hooks';

import * as styles from './home.module.scss';

const list: Hero[] = [
    {id: 1, name: 'flash 3D', thumbail: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg', isFavorite: false},
    {id: 2, name: 'flash 3D', thumbail: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg', isFavorite: true},
    {id: 3, name: 'flash 3D', thumbail: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg', isFavorite: false},
    {id: 4, name: 'flash 3D', thumbail: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg', isFavorite: false},
    {id: 5, name: 'flash 3D', thumbail: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg', isFavorite: false},
    {id: 6, name: 'flash 3D', thumbail: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg', isFavorite: true},
    {id: 7, name: 'flash 3D', thumbail: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg', isFavorite: false},
    {id: 8, name: 'flash 3D', thumbail: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg', isFavorite: false}
]
///*{ isLoading ? "Cargando" : <HeroList heroes={heroes} /> }
const Home = () => {
    const { heroes, searchHeroes, isLoading } = useSearchHerores();

    return (
        <section className={styles.content}>
            <SearchBar onSearch={searchHeroes} results={heroes.length}/>
            { isLoading ? 
                <div className={styles.content__loader}>
                    <Spinner />
                </div>
                : 
                <HeroList heroes={heroes} /> 
            }
        </section>
    );
}

export default Home;