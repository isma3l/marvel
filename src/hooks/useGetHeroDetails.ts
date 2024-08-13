import { useEffect, useState } from "react";
import { Comic, Hero } from "@/domain";
import { apiHeroRepository, apiComicRepository } from '@/repositories';
import { useUpdateHeroStatus } from "./useUpdateHeroesStatus";
import { Status } from "@/types";

export const useGetDetailsHero = (heroId: number) => {
    const [ hero, setHero] = useState<Hero>({} as Hero);
    const [ comics, setComics] = useState<Comic[]>([]);
    const [status, setStatus] = useState<Status>(Status.PENDING);
    const { updadtedHero } = useUpdateHeroStatus(hero);


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

    return { hero: updadtedHero, comics, status };
}