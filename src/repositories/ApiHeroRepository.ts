import { get } from '@/api';
import { Hero, HeroRepository } from '@/domain';
import { generateAccessKey } from '@/helper';

const LIMIT_RESULTS = 50;

const getHeroes = async (name?: string): Promise<Hero[]> => {
  const baseUrl = process.env['BASE_URL'];
  const searchName = name ? `&nameStartsWith=${name}` : '';
  const url = `${baseUrl}characters?limit=${LIMIT_RESULTS}${searchName}&${generateAccessKey()}`;

  const heroes = await get<Hero[]>(url);
  return heroes.map(({ id, name, thumbnail }) => ({ id, name, thumbnail }));
};

const getHeroById = async (heroId: number): Promise<Hero> => {
  const baseUrl = process.env['BASE_URL'];
  const url = `${baseUrl}characters/${heroId}?${generateAccessKey()}`;

  const heroes = await get<Hero[]>(url);
  const { id, name, thumbnail, description = '' } = heroes[0];
  return { id, name, thumbnail, description };
};

export const apiHeroRepository: HeroRepository = { getHeroes, getHeroById };
