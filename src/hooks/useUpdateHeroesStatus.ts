import { Hero } from "@/domain";
import { useHeroesContext } from "./useHeroesContext";

export const useUpdateHeroesStatus = (heroes: Hero[]) => {
    const { state: { favoriteHeroes } } = useHeroesContext();
    const updatedHeroes = heroes.map(hero => ({ ...hero, isFavorite: isFavoriteHero(hero.id, favoriteHeroes) }));

    return {
        heroes: updatedHeroes
    }
}

export const useUpdateHeroStatus = (hero: Hero) => {
    const { state: { favoriteHeroes } } = useHeroesContext();

    return {
        updadtedHero: { ...hero, isFavorite: isFavoriteHero(hero.id, favoriteHeroes) }
    }
}

const isFavoriteHero = (heroId: number, favoriteHeroes: Hero[]) => favoriteHeroes.some(hero => hero.id === heroId);