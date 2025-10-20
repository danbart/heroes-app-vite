import { heroApi } from "../api/hero.api";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getSearchHeroAction = async (name?: string, team?: string, category?: string, universe?: string, status?: string, strength?: string) => {
    if (!name && !team && !category && !universe && !status && !strength) {
        return [];
    }
    const { data } = await heroApi.get(`/search`, {
        params: { name, team, category, universe, status, strength }
    });
    return data.map((hero: any) => ({
        ...hero,
        image: `${API_URL}/images/${hero.image}`,
    }));
}