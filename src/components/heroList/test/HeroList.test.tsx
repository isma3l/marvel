import { screen } from '@testing-library/react';
import { generateMockHeroes, renderWithRouterProvider } from "@/test";
import { HeroList } from "../HeroList";


describe('<HeroList />', () => {
    const mockedHeroes = generateMockHeroes(4);

    it('should render list of 4 heroes', async () => {
        renderWithRouterProvider(<HeroList heroes={mockedHeroes} />);

        const heroes = await screen.findAllByRole('listitem');
        expect(heroes.length).toBe(4);
    });
});