import { Hero } from '@/domain';
import { useHeroesContext } from './useHeroesContext';

export const useUpdateHeroListStatus = (heroes: Hero[]) => {
  const {
    state: { favoriteHeroes }
  } = useHeroesContext();

  const updatedHeroes = heroes.map((hero) => ({
    ...hero,
    isFavorite: isFavoriteHero(hero.id, favoriteHeroes)
  }));

  return {
    updatedHeroes
  };
};

const isFavoriteHero = (heroId: number, favoriteHeroes: Hero[]) =>
  favoriteHeroes.some((hero) => hero.id === heroId);
