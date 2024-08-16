import { HeroContext } from "@/context";
import { ReactNode } from "react";
import { Context } from '@/context/HeroesContext';

export const mockedStateContext: Context = {
    state: {
        favoriteHeroes: []
    },
    addHero: jest.fn(),
    removeHero: jest.fn()
};

type PropiderWrapperProps = {
    children: ReactNode,
    value?: Context 
};

export const ProviderWrapper = ({ children, value = mockedStateContext }: PropiderWrapperProps) => (
    <HeroContext.Provider value={value}>
        {children}
    </HeroContext.Provider>
);