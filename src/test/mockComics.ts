import { faker } from '@faker-js/faker';
import { Comic } from '@/domain';

export const generateMockComics = (length: number): Comic[] => {
    const comics: Comic[] = Array.from({ length }).map(() => ({
        id: faker.number.int(),
        title: faker.person.fullName(),
        thumbnail: {
            path: faker.image.url(),
            extension: 'jpg'
        },
        modified: faker.date.between({from: '1950/01/01', to: '2001/12/31'}).toString()
    }));
    
    return comics;
}