import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../interfaces/hero.interface";

interface FavoriteHeroContext {
    favoriteHeroes: Hero[];
    favoriteCount: number;


    toggleFavorite: (hero: Hero) => void;
    isFavorite: (hero: Hero) => boolean;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoriteHeroesFromStorage = (): Hero[] => {
    if (typeof window === 'undefined') return [];
    const storedFavorites = localStorage.getItem('favoriteHeroes');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
}

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favoriteHeroes, setFavoriteHeroes] = useState<Hero[]>(getFavoriteHeroesFromStorage());
    const [favoriteCount, setFavoriteCount] = useState<number>(favoriteHeroes.length);

    const toggleFavorite = (hero: Hero) => {
        if (isFavorite(hero)) {
            setFavoriteHeroes(favoriteHeroes.filter(h => h.id !== hero.id));
            setFavoriteCount(favoriteCount - 1);
        } else {
            setFavoriteHeroes([...favoriteHeroes, hero]);
            setFavoriteCount(favoriteCount + 1);
        }
    };

    const isFavorite = (hero: Hero) => favoriteHeroes.some(h => h.id === hero.id);

    useEffect(() => {
        localStorage.setItem('favoriteHeroes', JSON.stringify(favoriteHeroes));
    }, [favoriteHeroes]);

    return (
        <FavoriteHeroContext value={{
            favoriteHeroes,
            favoriteCount,
            toggleFavorite,
            isFavorite,
        }}>
            {children}
        </FavoriteHeroContext>
    )
}