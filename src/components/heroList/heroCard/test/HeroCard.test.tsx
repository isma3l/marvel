import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { generateMockHeroes, renderWithRouterProvider, RouterProviderWrapper } from '@/test';
import { HeroCard } from '../HeroCard';

describe('HeroCard', () => {
  const mockedHero = generateMockHeroes(1)[0];

  it('should render a hero card', () => {
    renderWithRouterProvider(<HeroCard hero={mockedHero} />);

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      `${mockedHero.thumbnail.path}.${mockedHero.thumbnail.extension}`
    );
    expect(screen.getByText(mockedHero.name)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('clicking on herocard redirects to details', async () => {
    const history = createMemoryHistory();

    render(
      <RouterProviderWrapper history={history}>
        <HeroCard hero={mockedHero} />
      </RouterProviderWrapper>
    );

    const heroImage = screen.getByRole('img');
    await userEvent.click(heroImage);

    expect(history.location.pathname).toBe(`/hero/${mockedHero.id}`);
  });
});
