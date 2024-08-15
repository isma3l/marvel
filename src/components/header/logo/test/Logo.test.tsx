import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { renderWithRouterProvider, RouterProviderWrapper } from '@/test';
import { Logo } from '../Logo';

describe('<Logo />', () => {
    it('should render a marvel logo', () => {
        renderWithRouterProvider(<Logo />);

        const link = screen.getByRole('link');
        expect(link.getAttribute('href')).toBe('/');

        expect(screen.getByRole('img')).toHaveAttribute('alt', "Marvel Logo");
    });

    it('clicking on the Logo navigates to main view', async () => {
        const history = createMemoryHistory();

        render(
            <RouterProviderWrapper history={history}>
                <Logo />
            </RouterProviderWrapper>
        );

        const link = screen.getByRole('link');
        await userEvent.click(link);
        
        expect(history.location.pathname).toBe('/');
    });
});