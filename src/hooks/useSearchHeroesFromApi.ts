import { useEffect, useState } from "react"
import { Hero } from "@/domain";
import { apiHeroRepository } from '@/repositories';

export const useSearchHeroresFromApi = () => {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        searchHeroes();
    }, []);

    const searchHeroes = async (searchName: string = '') => {
        try {
            setIsLoading(true);
            const heroes = await apiHeroRepository.getHeroes(searchName);
            setHeroes(heroes);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Search Heroes:', error);
        } finally {
            setIsLoading(false);
        }
    } 


    return { heroes, searchHeroes, isLoading};
}