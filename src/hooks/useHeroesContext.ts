import { useContext } from 'react';
import { HeroContext } from '@/context';

export const useHeroesContext = () => {
  const value = useContext(HeroContext);

  if (value === undefined) {
    throw new Error(`useContext must be used inside a Provider with a value that's not undefined`);
  }
  return value;
};
