import { render, screen } from "@testing-library/react";
import { ComicItem } from "../ComicItem";
import { generateMockComics } from "@/test";

describe('<ComicItem />', () => {
    it('should rendering Comicitem', () => {
        const mockedComic = generateMockComics(1)[0];

        render(<ComicItem comic={mockedComic} />);

        expect(screen.getByRole('img'))
            .toHaveAttribute('src', `${mockedComic.thumbnail.path}.${mockedComic.thumbnail.extension}`);
            expect(screen.getByText(mockedComic.title)).toBeInTheDocument();
            expect(screen.getByText(mockedComic.modified)).toBeInTheDocument();
    });
});