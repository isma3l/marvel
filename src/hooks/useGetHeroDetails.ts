import { useEffect, useState } from "react";
import { Comic, Hero } from "@/domain";
import { apiHeroRepository, apiComicRepository } from '@/repositories';
import { useUpdateHeroListStatus } from "./useUpdateHeroListStatus";
import { Status } from "@/types";

export const useGetDetailsHero = (heroId: number) => {
    const [ hero, setHero] = useState<Hero>({} as Hero);
    const [ comics, setComics] = useState<Comic[]>([]);
    const [status, setStatus] = useState<Status>(Status.PENDING);
    const { updatedHeroes: [ updatedHero ] } = useUpdateHeroListStatus([hero]);

    useEffect(() => {
        const getDetailsHero = async () => {
            try {
                setStatus(Status.PENDING);
                const [hero, comics] = await Promise.all([
                    apiHeroRepository.getHeroById(heroId),
                    apiComicRepository.getComics(heroId)]);
                setHero(hero);
                setComics(comics);
                setStatus(Status.SUCCESS);
            } catch (error) {
                setStatus(Status.ERROR);
            }
        }

        getDetailsHero();
    }, []);

    return { hero: updatedHero, comics, status };
}