import { get } from "@/api";
import { Comic } from "@/domain";
import { ComicRepository } from "@/domain/repository/ComicRepository";
import { generateAccessKey } from '@/helper';

const LIMIT_RESULTS = 20;

const getComics = async (heroId: number): Promise<Comic[]> => {
    const baseUrl = process.env['BASE_URL'];
    const url = `${baseUrl}characters/${heroId}/comics?limit=${LIMIT_RESULTS}&${generateAccessKey()}`

    //return get<Comic[]>(url);
    return [];
}

export const apiComicRepository: ComicRepository = { getComics };