import { Hero } from "../model/Hero";

export interface HeroRepository {
    getHeroes(name?: string): Promise<Hero[]>
}