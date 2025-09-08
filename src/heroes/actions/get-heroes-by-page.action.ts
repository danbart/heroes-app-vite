import { heroApi } from "../api/hero.api";
import type { HeroesResponse } from "../interfaces/get-heroes.response";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
export const getHeroesByPageAction = async (page: number, limit: number): Promise<HeroesResponse> => {
    const { data } = await heroApi.get(`/`, {
        // params: {
        //     _page: page,
        //     _limit: limit,
        // },
    });

    const heroes = data.heroes.map((hero: any) => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`,
        strength: hero.strength * 10 || 50,
        intelligence: hero.intelligence * 10 || 50,
        speed: hero.speed * 10 || 50,
        durability: hero.durability * 10 || 50,
    }));
    return { ...data, heroes };
};