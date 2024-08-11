import { useHeroesContext } from "./useHeroesContext";
import { useUpdateHeroesStatus } from "./useUpdateHeroesStatus";
import { useSearchFavoriteHeroes } from "./useSearchFavoriteHeroes";
import { useSearchHeroresFromApi } from "./useSearchHeroesFromApi";

export const useSearchHeroes = () => {
    const { state: { showFavorites } } = useHeroesContext();
    const { favoriteHeroesSearched, setSearchedName } = useSearchFavoriteHeroes();
    const { heroes: foundHeroes, searchHeroes: searchHeroesFromApi, isLoading } = useSearchHeroresFromApi();
    const { heroes } = useUpdateHeroesStatus(foundHeroes);

    return {
        heroes: showFavorites ? favoriteHeroesSearched : heroes,
        searchHeroes: showFavorites ? setSearchedName : searchHeroesFromApi,
        isLoading: showFavorites ? false : isLoading,
        showFavorites
    }
}