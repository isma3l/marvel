import { useEffect, useState } from 'react';
import './styles.scss';
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";

import md5 from "md5";
import { Header } from '@/shared/components/header/Header';
import { SearchBar } from './shared/components/searchBar/SearchBar';
import { HeroCard, HeroList } from './shared/components';

/*
import MarvelLogo from '@/assets/images/marvel_logo';
*/

const App = () => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const heroes = async () => {
            try {
                const timestamp = Date.now();
                const privateKey = '653b79c7e9a74e6dd7c026ca01091de60246e02e';
                const publicKey = 'f3e6f65a011e69240141f03c0f872874';
                const hash = md5(`${timestamp}${privateKey}${publicKey}`);
                const extra = `limit=50&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
               // const response = await fetch(`http://gateway.marvel.com/v1/public/characters?${extra}`);
                
                const data = await response.json();
                console.log("data", data);
            } catch (error) {
                console.log("error", error);
            }
        }
        heroes();
    }, []);
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
    return (
        <div>
            <Header />
            <FcLike size={20}/>
            <FaRegHeart color="white" size={18} />
            <FcLike size={20} />

            <SearchBar query={query} setQuery={setQuery} results={50}/>
            <HeroList heroes={list} />
        </div>
    );
}

export default App;
