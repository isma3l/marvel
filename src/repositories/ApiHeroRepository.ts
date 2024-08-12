import { get } from "@/api";
import { Hero, HeroRepository } from "@/domain";
import { generateAccessKey } from '@/helper';

const LIMIT_RESULTS = 50;

const mock: Hero[] = 
[{
    "id": 1011334,
    "name": "3-D Man",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        "extension": "jpg"
    }
},
{
    "id": 1017100,
    "name": "A-Bomb (HAS)",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        "extension": "jpg"
    }
},
{
    "id": 1009144,
    "name": "Hulk",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
        "extension": "jpg"
    }
},
{
    "id": 1010699,
    "name": "Aaron Stack",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
    }
},
{
    "id": 1009146,
    "name": "Abomination (Emil Blonsky)",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        "extension": "jpg"
    }
},
{
    "id": 1016823,
    "name": "Hulk (Ultimate)",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
    }
},
{
    "id": 1009148,
    "name": "Absorbing Man",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
        "extension": "jpg"
    }
},
{
    "id": 1009149,
    "name": "Abyss",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
        "extension": "jpg"
    }
},
{
    "id": 1010903,
    "name": "Abyss (Age of Apocalypse)",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
        "extension": "jpg"
    }
},
{
    "id": 1011266,
    "name": "Adam Destine",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
    }
},
{
    "id": 1010932,
    "name": "Abyss (Age of Apocalypse)",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
        "extension": "jpg"
    }
},
{
    "id": 1011298,
    "name": "spider",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
    }
},
{
    "id": 1022903,
    "name": "Spider (Age of Apocalypse)",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
        "extension": "jpg"
    }
},
{
    "id": 3211266,
    "name": "Adam Destine",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
    }
}]

const test = async (): Promise<Hero[]> => {
    return new Promise((r) => {
        setTimeout(() => {
            r(mock);
        }, 3000);
    });
    
}

const getHeroes = async (name?: string): Promise<Hero[]> => {
    const baseUrl = process.env['BASE_URL'];
    const searchName = name ? `&nameStartsWith=${name}` : '';
    const url = `${baseUrl}characters?limit=${LIMIT_RESULTS}${searchName}&${generateAccessKey()}`;
    
    //return get<Hero[]>(url);
    
    ///const heroes = await test();
    // ->return heroes.map(hero => ({ id: hero.id, name: hero.name, thumbnail: hero.thumbnail }));
/*     if (name) {
        return heroes.filter(hero => hero.name.toUpperCase().includes(name.toUpperCase()));
    } else {
        return heroes.map(hero => ({ id: hero.id, name: hero.name, thumbnail: hero.thumbnail }));
    } */
    return mock;
   
}

const mockHero: Hero = {
    id: 1017100,
    name: "A-Bomb (HAS)",
    thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg"
    },
    description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!"
}

const getHeroById = async (heroId: number): Promise<Hero> => {
    const baseUrl = process.env['BASE_URL'];
    const url = `${baseUrl}characters/${heroId}?${generateAccessKey()}`;
        
    //const heroes = await get<Hero[]>(url);
    //const { id, name, thumbnail, description = ''} = heroes[0];
    //return { id, name, thumbnail, description };
    return mockHero;
}

export const apiHeroRepository: HeroRepository = { getHeroes, getHeroById };
