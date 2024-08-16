import { render, screen } from '@testing-library/react';
import { SearchBar } from '../SearchBar';
import userEvent from '@testing-library/user-event';

describe('<SearchBar />', () => {
  const user = userEvent.setup();

  it('should render a search bar', () => {
    const mockOnSearch = jest.fn();
    const foundHeroes = 0;

    render(<SearchBar results={foundHeroes} onSearch={mockOnSearch} />);

    expect(screen.getByLabelText('hero name searched')).toBeInTheDocument();
    expect(screen.getByText(`${foundHeroes} RESULTS`)).toBeInTheDocument();
  });

  it('a hero will be searched for after you enter a name and press enter', async () => {
    const mockOnSearch = jest.fn();
    const foundHeroes = 0;
    const searched = 'spiderman';

    render(<SearchBar results={foundHeroes} onSearch={mockOnSearch} />);

    const input = screen.getByLabelText('hero name searched');
    await user.type(input, searched);
    await user.keyboard('{enter}');

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith(searched);
  });
});
