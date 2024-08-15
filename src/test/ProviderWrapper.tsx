import { HeroContext } from "@/context";
import { ReactNode } from "react";
import { Context } from '@/context/HeroesContext';

export const mockContext: Context = {
    state: {
        favoriteHeroes: []
    },
    addHero: jest.fn(),
    removeHero: jest.fn()
};

type PropiderWrapperProps = {
    children: ReactNode,
    context?: Context 
};

export const ProviderWrapper = ({ children, context = mockContext }: PropiderWrapperProps) => (
    <HeroContext.Provider value={context}>
        {children}
    </HeroContext.Provider>
);