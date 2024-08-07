import { HeroList, SearchBar } from "@/components";
import { Hero } from "@/shared/models";
import { useState } from "react";

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

export const Home = () => {
    const [query, setQuery] = useState('');

    return (
        <section className={styles.content}>
            <SearchBar query={query} setQuery={setQuery} results={50}/>
            <HeroList heroes={list} />
        </section>
    );
}