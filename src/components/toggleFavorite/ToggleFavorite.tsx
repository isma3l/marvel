import { FcLike } from 'react-icons/fc';
import { FaRegHeart } from 'react-icons/fa';
import { Hero } from '@/domain';
import { useHeroesContext } from '@/hooks';
import { toggle } from './toggleFavorite.module.scss';

type ToggleFavoriteProps = {
  hero: Hero;
  size: number;
};

export const ToggleFavorite = ({ size, hero }: ToggleFavoriteProps) => {
  const { addHero, removeHero } = useHeroesContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    hero.isFavorite ? removeHero(hero.id) : addHero(hero);
  };

  return (
    <button className={toggle} aria-label="toggle favorite" onClick={handleClick}>
      {hero.isFavorite ? (
        <FcLike size={size} title="favorite" />
      ) : (
        <FaRegHeart color="white" size={size} title="not favorite" />
      )}
    </button>
  );
};
