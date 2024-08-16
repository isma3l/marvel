import { generateMockComics } from "@/test";
import { render, screen, within } from "@testing-library/react";
import { ComicList } from "..";

describe('<ComicList />', () => {
    it('should rendering comic list', async () => {
        const [comic1, comic2, comic3 ] = generateMockComics(3);
        const mockedComics = [ {...comic1, modified: '01-03-2019'}, {...comic2, modified: '02-02-2010'}, {...comic3, modified: '10-08-2018'}];

        render(<ComicList comics={mockedComics}  />);

        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('COMICS');

        const items = await screen.findAllByRole('listitem');
        expect(items.length).toBe(3);
        // sorted list by date
        expect(within(items[0]).getByText('2010')).toBeTruthy();
        expect(within(items[1]).getByText('2018')).toBeTruthy();
        expect(within(items[2]).getByText('2019')).toBeTruthy();
    })
});