import { generateMockHeroes, ProviderWrapper } from "@/test";
import { render, screen } from "@testing-library/react";
import { HeroBanner } from "../HeroBanner";

describe('<HeroBanner />', () => {
    it('should rendering hero banner', () => {
        const mockedHero = generateMockHeroes(1)[0];

        render(
            <ProviderWrapper>
                <HeroBanner hero={mockedHero} />
            </ProviderWrapper>
        );

        expect(screen.getByRole('img'))
            .toHaveAttribute('src', `${mockedHero.thumbnail.path}.${mockedHero.thumbnail.extension}`);

        expect(screen.getByRole('heading', { level: 1})).toHaveTextContent(mockedHero.name);
        expect(screen.getByTitle("not favorite" )).toBeInTheDocument();
        expect(screen.getByText(mockedHero.description ?? "")).toBeInTheDocument();
    });
});