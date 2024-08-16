import { FavoritesCounter } from './favoriteCounter';
import { Logo } from './logo';
import * as styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <FavoritesCounter />
    </header>
  );
};
