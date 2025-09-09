import { heroApi } from "../api/hero.api";
import type { Hero } from "../interfaces/hero.interface";


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getHeroAction = async (idSlug: string) => {
    const { data } = await heroApi.get<Hero>(`/${idSlug}`);
    return {
        ...data,
        image: `${API_URL}/images/${data.image}`,
        strength: data.strength * 10 || 50,
        intelligence: data.intelligence * 10 || 50,
        speed: data.speed * 10 || 50,
        durability: data.durability * 10 || 50,
    };
};