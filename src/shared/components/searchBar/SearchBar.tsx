import { IoIosSearch } from "react-icons/io";

import * as styles from './searchBar.module.scss';

type SearchBarProps = {
    query: string;
    setQuery: (value: string) => void;
    results: number;
}

export const SearchBar = ({ query, setQuery, results }: SearchBarProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
    }

    return (
            <section role='search'>
                <div className={styles.search}>
                    <label htmlFor='search'>
                        <IoIosSearch />
                    </label>
                    <input
                        id='search'
                        name='search'
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder='SEARCH A CHARACTER...'
                        autoComplete="off"
                        className={styles.search__input}
                    />
                </div>
                <span className={styles.search__results}>{results} RESULTS</span>
            </section>
    )
};