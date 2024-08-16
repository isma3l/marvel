import { render, screen } from "@testing-library/react";
import { ToggleFavorite } from "../ToggleFavorite";
import { generateMockHeroes, ProviderWrapper, mockedStateContext } from "@/test";
import userEvent from "@testing-library/user-event";
import { Hero } from "@/domain";

describe('<ToogleFavorite />', () => {
    const user = userEvent.setup();
    const mockedHero = generateMockHeroes(1)[0];

    it('should render toogleFavorite component', () => {
        render(
            <ProviderWrapper>
                <ToggleFavorite hero={mockedHero} size={20} />
            </ProviderWrapper>
        );

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByTitle("not favorite" )).toBeInTheDocument();
    }),

    it('since the hero is not favorite when the icon is pressed it is added as a favorite', async () => {
        render(
            <ProviderWrapper value={mockedStateContext}>
                <ToggleFavorite hero={mockedHero} size={20} />
            </ProviderWrapper>
        );

        expect(screen.getByTitle("not favorite" )).toBeInTheDocument();
        
        const button = screen.getByRole('button');
        await user.click(button);

        expect(mockedStateContext.addHero).toHaveBeenCalled();
    });

    it('since the hero is favorite when the icon is pressed it is removed as a favorite', async () => {
        const favoriteHero: Hero = { ...mockedHero, isFavorite: true };

        render(
            <ProviderWrapper value={mockedStateContext}>
                <ToggleFavorite hero={favoriteHero} size={20} />
            </ProviderWrapper>
        );

        expect(screen.getByTitle("favorite" )).toBeInTheDocument();
        
        const button = screen.getByRole('button');
        await user.click(button);

        expect(mockedStateContext.removeHero).toHaveBeenCalled();
    });
});