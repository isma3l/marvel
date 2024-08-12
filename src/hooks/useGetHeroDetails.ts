import { useEffect, useState } from "react";
import { Comic, Hero } from "@/domain";
import { apiHeroRepository, apiComicRepository } from '@/repositories';
import { useUpdateHeroStatus } from "./useUpdateHeroesStatus";

export const useGetDetailsHero = (heroId: number) => {
    const [ hero, setHero] = useState<Hero>({} as Hero);
    const [ comics, setComics] = useState<Comic[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { updadtedHero } = useUpdateHeroStatus(hero);


    useEffect(() => {
        const getDetailsHero = async () => {
            try {
                setIsLoading(true);
                const [hero, comics] = await Promise.all([
                    apiHeroRepository.getHeroById(heroId),
                    apiComicRepository.getComics(heroId)]);
                setHero(hero);
                setComics(comics);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Details Heroe:', error);
            } finally {
                setIsLoading(false);
            }
        }

        getDetailsHero();
    }, []);

    return { hero: updadtedHero, comics, isLoading };
}