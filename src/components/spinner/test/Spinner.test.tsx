import { screen, render } from '@testing-library/react';
import { Spinner } from '../Spinner';

describe('<Spinner />', () => {
  it('should render a spinner', () => {
    render(<Spinner />);
    expect(screen.getByLabelText('loading')).toBeInTheDocument();
  });
});
