import { HeroList, SearchBar, Spinner } from '@/components';
import { useSearchHeroresFromApi } from '@/hooks';
import { Status } from '@/types';
import * as styles from './home.module.scss';

const Home = () => {
  const { heroes, searchHeroes, status } = useSearchHeroresFromApi();

  if (status === Status.ERROR) return <h1>Intentalo mas tarde. Ocurrió un error.</h1>;

  return (
    <section className={styles.content}>
      <SearchBar onSearch={searchHeroes} results={heroes.length} />
      {status === Status.PENDING ? <Spinner /> : <HeroList heroes={heroes} />}
    </section>
  );
};

export default Home;
