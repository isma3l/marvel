import { faker } from '@faker-js/faker';
import { Hero } from '@/domain';

export const generateMockHeroes = (length: number): Hero[] => {
    const heroes: Hero[] = Array.from({ length }).map(() => ({
        id: faker.number.int(),
        name: faker.person.fullName(),
        thumbnail: {
            path: faker.image.url(),
            extension: 'jpg'
        }
    }));
    
    return heroes;
}