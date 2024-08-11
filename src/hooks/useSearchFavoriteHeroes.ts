import { useMemo, useState } from 'react';
import { useHeroesContext } from './useHeroesContext';

export const useSearchFavoriteHeroes = () => {
    const [searchedName, setSearchedName] = useState<string>('');
    const { state: { favoriteHeroes } } = useHeroesContext();

    const favoriteHeroesSearched = useMemo(() => {
        return favoriteHeroes.filter(hero => hero.name.toUpperCase().includes(searchedName.toUpperCase()))
    }, [searchedName, favoriteHeroes]);

    return { favoriteHeroesSearched, setSearchedName };
}