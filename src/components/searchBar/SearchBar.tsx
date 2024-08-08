import { IoIosSearch } from "react-icons/io";
import * as styles from './searchBar.module.scss';
import { useState } from "react";

type SearchBarProps = {
    onSearch: (value: string) => void;
    results: number;
}

const KEY_START_SEARCH = 'Enter';

export const SearchBar = ({ results, onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == KEY_START_SEARCH) {
            onSearch(query);
        }        
    }

    return (
            <section role='search' className={styles.search}>
                <div className={styles.search__content}>
                    <label htmlFor='search'>
                        <IoIosSearch />
                    </label>
                    <input
                        id='search'
                        name='search'
                        type="text"
                        value={query}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder='SEARCH A CHARACTER...'
                        autoComplete="off"
                        className={styles.search__input}
                    />
                </div>
                <span className={styles.search__results}>{results} RESULTS</span>
            </section>
    )
};