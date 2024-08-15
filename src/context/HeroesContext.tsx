import { createContext, ReactNode, useMemo, useState } from "react";
import { Hero } from "@/domain"

export type State = {
    favoriteHeroes: Hero[];
}
export type Context = {
    state: State;
    addHero: (hero: Hero) => void;
    removeHero: (heroId: number) => void;
}

export const HeroContext = createContext<Context>({} as Context);

type HeroesProviderProps = {
    children: ReactNode;
};

export const HeroesProvider = ({ children }: HeroesProviderProps) => {
    const [state, setState] = useState<State>({ favoriteHeroes: [] });

    const value = useMemo(() => {
        const addHero = (hero: Hero) => {            
            setState({ favoriteHeroes: [ ...state.favoriteHeroes, { ...hero, isFavorite: true }] });
        }
        const removeHero = (heroId: number) => {
            const favoriteHeroes = state.favoriteHeroes.filter(hero => hero.id !== heroId);
            setState({ favoriteHeroes });
        }

        return { state, addHero, removeHero };
    }, [state]);

    return (
        <HeroContext.Provider value={value}>
            {children}
        </HeroContext.Provider>
    );
}