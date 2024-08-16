import { render, screen } from '@testing-library/react';
import { HeroCard } from '@/components/heroList/heroCard';
import { Hero } from '@/domain';
import { useHeroesContext } from '@/hooks';
import { HeroesProvider } from '../HeroesContext';
import { generateMockHeroes } from '@/test';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

const TestingComponent = ({ hero }: { hero: Hero }) => {
  const {
    state: { favoriteHeroes },
    addHero,
    removeHero
  } = useHeroesContext();

  return (
    <>
      <div role="list">
        {favoriteHeroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
      <button onClick={() => addHero(hero)}>add Hero</button>
      <button onClick={() => removeHero(hero.id)}>remove hero</button>
    </>
  );
};

describe('<HeroesContext />', () => {
  const user = userEvent.setup();
  const mockedHero = generateMockHeroes(1)[0];

  it('provides expected HeroesContext', async () => {
    render(
      <HeroesProvider>
        <TestingComponent hero={mockedHero} />
      </HeroesProvider>,
      { wrapper: BrowserRouter }
    );

    const addHeroButton = screen.getByText('add Hero');
    const removeHeroButton = screen.getByText('remove hero');

    const firstList = screen.queryAllByRole('listitem');
    expect(firstList.length).toBe(0);

    await user.click(addHeroButton);

    const secondList = screen.queryAllByRole('listitem');
    expect(secondList.length).toBe(1);

    await user.click(removeHeroButton);

    const thirdList = screen.queryAllByRole('listitem');
    expect(thirdList.length).toBe(0);
  });
});
