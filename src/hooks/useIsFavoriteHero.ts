import { useHeroesContext } from "./useHeroesContext";

export const useIsFavoriteHero = () => {
    const { state: { favoriteHeroes } } = useHeroesContext();

    const isFavoriteHero = (heroId: number) => favoriteHeroes.some(hero => hero.id === heroId);

    return { isFavoriteHero };
}