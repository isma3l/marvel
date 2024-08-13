import { useHeroesContext } from "./useHeroesContext";
import { useUpdateHeroesStatus } from "./useUpdateHeroesStatus";
import { useSearchFavoriteHeroes } from "./useSearchFavoriteHeroes";
import { useSearchHeroresFromApi } from "./useSearchHeroesFromApi";
import { Status } from "@/types";

export const useSearchHeroes = () => {
    const { state: { showFavorites } } = useHeroesContext();
    const { favoriteHeroesSearched, setSearchedName } = useSearchFavoriteHeroes();
    const { heroes: foundHeroes, searchHeroes: searchHeroesFromApi, status } = useSearchHeroresFromApi();
    const { heroes } = useUpdateHeroesStatus(foundHeroes);

    return {
        heroes: showFavorites ? favoriteHeroesSearched : heroes,
        searchHeroes: showFavorites ? setSearchedName : searchHeroesFromApi,
        status: showFavorites ? Status.SUCCESS : status,
        showFavorites
    }
}