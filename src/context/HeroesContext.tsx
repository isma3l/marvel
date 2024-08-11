import { createContext, ReactNode, useMemo, useState } from "react";
import { Hero } from "@/domain"

export type State = {
    favoriteHeroes: Hero[];
    showFavorites: boolean;
}
export type Context = {
    state: State;
    addHero: (hero: Hero) => void;
    removeHero: (heroId: number) => void;
    setShowFavorites: (showFavorites: boolean) => void;
}

export const HeroContext = createContext<Context>({} as Context);

type HeroesProviderProps = {
    children: ReactNode;
};

export const HeroesProvider = ({ children }: HeroesProviderProps) => {
    const [state, setState] = useState<State>({ favoriteHeroes: [], showFavorites: false});

    const value = useMemo(() => {
        const addHero = (hero: Hero) => {            
            setState({ favoriteHeroes: [ ...state.favoriteHeroes, { ...hero, isFavorite: true }], showFavorites: state.showFavorites });
        }
        const removeHero = (heroId: number) => {
            const favoriteHeroes = state.favoriteHeroes.filter(hero => hero.id !== heroId);
            setState({ favoriteHeroes, showFavorites: state.showFavorites });
        }

        const setShowFavorites = (showFavorites: boolean) => {
            setState({ favoriteHeroes: state.favoriteHeroes, showFavorites });
        }

        return { state, addHero, removeHero, setShowFavorites };
    }, [state]);

    return (
        <HeroContext.Provider value={value}>
            {children}
        </HeroContext.Provider>
    );
}