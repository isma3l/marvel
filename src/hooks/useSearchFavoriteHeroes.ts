import { useMemo, useState } from 'react';
import { useHeroesContext } from './useHeroesContext';

export const useSearchFavoriteHeroes = () => {
  const [searchedHero, setSearchedHero] = useState<string>('');
  const {
    state: { favoriteHeroes }
  } = useHeroesContext();

  const favoriteHeroesSearched = useMemo(() => {
    return favoriteHeroes.filter((hero) =>
      hero.name.toUpperCase().includes(searchedHero.toUpperCase())
    );
  }, [searchedHero, favoriteHeroes]);

  return { heroes: favoriteHeroesSearched, searchHeroes: setSearchedHero };
};
