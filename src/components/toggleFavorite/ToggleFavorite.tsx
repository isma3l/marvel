import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { Hero } from "@/domain";
import { useHeroesContext } from "@/hooks";
import { toggle } from './toggleFavorite.module.scss';

type ToggleFavoriteProps = {
    hero: Hero;
    size: number;
}

export const ToggleFavorite = ({ size, hero }: ToggleFavoriteProps) => {
    const { addHero, removeHero } = useHeroesContext();

    const onClickRemoveHero = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        event.preventDefault();
        removeHero(hero.id);
    }

    const onClickAddHero = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        event.preventDefault();
        addHero(hero);
    }

    return (
        <div className={toggle}>
            { hero.isFavorite 
                ? <FcLike size={size} onClick={onClickRemoveHero}/>
                : <FaRegHeart color="white" size={size} onClick={onClickAddHero}/>
            }                    
        </div>  
    );
}