import { Hero } from "@/domain";
import { useIsFavoriteHero } from "./useIsFavoriteHero";

export const useUpdateHeroesStatus = (heroes: Hero[]) => {
    const { isFavoriteHero } = useIsFavoriteHero();

    const updatedHeroes = heroes.map(({id, name, thumbnail}) => ({ id, name, thumbnail, isFavorite: isFavoriteHero(id) }));

    return {
        heroes: updatedHeroes
    }
}