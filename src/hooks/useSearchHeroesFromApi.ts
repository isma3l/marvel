import { useEffect, useState } from 'react';
import { Hero } from '@/domain';
import { apiHeroRepository } from '@/repositories';
import { Status } from '@/types';
import { useUpdateHeroListStatus } from './useUpdateHeroListStatus';

export const useSearchHeroresFromApi = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [status, setStatus] = useState<Status>(Status.PENDING);
  const { updatedHeroes } = useUpdateHeroListStatus(heroes);

  useEffect(() => {
    searchHeroes();
  }, []);

  const searchHeroes = async (searchName: string = '') => {
    try {
      setStatus(Status.PENDING);
      const heroes = await apiHeroRepository.getHeroes(searchName);
      setHeroes(heroes);
      setStatus(Status.SUCCESS);
    } catch (error) {
      setStatus(Status.ERROR);
    }
  };

  return { heroes: updatedHeroes, searchHeroes, status };
};
