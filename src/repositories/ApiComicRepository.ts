import { get } from "@/api";
import { Comic } from "@/domain";
import { ComicRepository } from "@/domain/repository/ComicRepository";
import { generateAccessKey } from '@/helper';

const LIMIT_RESULTS = 20;

const mocks: Comic[] = [
    {
        id: 103120,
        title: "Who Is...? M.O.D.O.K. Infinity Comic (2023) #1",
        thumbnail: {
            extension: "jpg",
            path: "http://i.annihil.us/u/prod/marvel/i/mg/5/00/63bd9786689b9"
        },
        modified: "2023-02-13T01:17:35-0500"
    },{
        id: 103371,
        title: "Avengers Unlimited Infinity Comic (2022) #17",
        thumbnail: {
            extension: "jpg",
            path: "http://i.annihil.us/u/prod/marvel/i/mg/d/00/631f5ddd865fe"
        },
        modified: "2022-10-21T13:23:03-0400"
    }, {
        id: 92308,
        title: "X-Men Unlimited Infinity Comic (2021) #2",
        thumbnail: {
            extension: "jpg",
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/30/611e6f42d0681"
        },
        modified: "2021-09-07T17:11:07-0400"
    }, {
        id: 92307,
        title: "X-Men Unlimited Infinity Comic (2021) #1",
        thumbnail: {
            extension: "jpg",
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/10/611e6f42d016f"
        },
        modified: "2021-09-07T17:10:39-0400"
    },
    {
        id: 922307,
        title: "X-Men Unlimited Infinity Comic (2021) #1",
        thumbnail: {
            extension: "jpg",
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/10/611e6f42d016f"
        },
        modified: "2017-09-07T17:10:39-0400"
    },
    {
        id: 923017,
        title: "X-Men Unlimited Infinity Comic (2021) #1",
        thumbnail: {
            extension: "jpg",
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/10/611e6f42d016f"
        },
        modified: "2019-09-07T17:10:39-0400"
    }
];

const getComics = async (heroId: number): Promise<Comic[]> => {
    const baseUrl = process.env['BASE_URL'];
    const url = `${baseUrl}characters/${heroId}/comics?limit=${LIMIT_RESULTS}&${generateAccessKey()}`

    //return get<Comic[]>(url);
    return mocks;
}

export const apiComicRepository: ComicRepository = { getComics };