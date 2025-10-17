import { useQuery } from '@tanstack/react-query';
import { getHeroAction } from '../actions/get-hero.action';

interface Props {
    idSlug: string;
}

export const useHero = ({ idSlug }: Props) => {
    return useQuery({
        queryKey: ['hero', { idSlug }],
        queryFn: () => getHeroAction(idSlug),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
    })
}
