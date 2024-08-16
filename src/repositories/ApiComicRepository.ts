import { get } from "@/api";
import { Comic } from "@/domain";
import { ComicRepository } from "@/domain/repository/ComicRepository";
import { generateAccessKey } from '@/helper';

const LIMIT_RESULTS = 20;

const getComics = async (heroId: number): Promise<Comic[]> => {
    const baseUrl = process.env['BASE_URL'];
    const url = `${baseUrl}characters/${heroId}/comics?limit=${LIMIT_RESULTS}&${generateAccessKey()}`

    const comics = await get<Comic[]>(url);
    return comics.map(({ id, title, thumbnail, modified }) => ({ id, title, thumbnail, modified }));
}

export const apiComicRepository: ComicRepository = { getComics };