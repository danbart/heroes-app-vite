import { useQuery } from '@tanstack/react-query';
import { getSearchHeroAction } from '../actions/get-hero-search.action';

interface Options {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: string;
}

export const useSearchHero = ({ name, team, category, universe, status, strength }: Options) => {
    return useQuery({
        queryKey: ['search', { name, team, category, universe, status, strength }],
        queryFn: () => getSearchHeroAction(name, team, category, universe, status, strength),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}
