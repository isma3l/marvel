import { Hero } from "../model/Hero";

export interface HeroRepository {
    getHeroes(name?: string): Promise<Hero[]>;
    getHeroById(heroId: number): Promise<Hero> ;
}