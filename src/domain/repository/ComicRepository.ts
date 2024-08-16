import { Comic } from '../model/Comic';

export interface ComicRepository {
  getComics(heroId: number): Promise<Comic[]>;
}
