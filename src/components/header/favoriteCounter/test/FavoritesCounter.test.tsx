import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { renderWithRouterProvider, RouterProviderWrapper } from '@/test';
import { FavoritesCounter } from '../FavoritesCounter';

describe('<FavoritesCounter />', () => {
  it('should render favorites counter', () => {
    renderWithRouterProvider(<FavoritesCounter />);

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/favorites');

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('clicking on the favorites icon navigates to favorite heroes', async () => {
    const history = createMemoryHistory();

    render(
      <RouterProviderWrapper history={history}>
        <FavoritesCounter />
      </RouterProviderWrapper>
    );

    const link = screen.getByRole('link');
    await userEvent.click(link);

    expect(history.location.pathname).toBe('/favorites');
  });
});
