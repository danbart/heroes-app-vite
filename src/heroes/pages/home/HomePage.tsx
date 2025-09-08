import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { useQuery } from "@tanstack/react-query"
import { Heart } from "lucide-react"
import { useMemo } from "react"
import { useSearchParams } from "react-router"
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron'


export const HomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get('tab') || 'all';
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '6';
    const setActiveTab = (tab: string) => {
        setSearchParams({ tab });
    }

    const selectActiveTab = useMemo(() => {
        const tabs = ['all', 'favorites', 'heroes', 'villains'];
        return tabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab]);

    // const [activeTab, setActiveTab] = useState<
    // 'all' | 'favorites' | 'heroes' | 'villains'
    // >('all');

    // useEffect(() => {
    //     getHeroesByPage(1, 10).then(({ heroes }) => console.log(heroes));
    // }, []);

    const { data: heroesResponse, isLoading, error } = useQuery({
        queryKey: ['heroes', { page, limit }],
        queryFn: () => getHeroesByPageAction(+page, +limit),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })

    console.log(heroesResponse);

    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron title="Heroic Dashboard" description="Manage your collection of heroes and villains with ease." />

                <CustomBreadcrumbs currentPage="Super Heroes" />
                {/* Stats Dashboard */}
                <HeroStats />


                {/* Tabs */}
                <Tabs value={selectActiveTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
                        <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setActiveTab('favorites')}>
                            <Heart className="h-4 w-4" />
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" >  <HeroGrid heroes={heroesResponse?.heroes ?? []} /> </TabsContent>
                    <TabsContent value="favorites" >  <HeroGrid heroes={heroesResponse?.heroes ?? []} /> </TabsContent>
                    <TabsContent value="heroes" >  <HeroGrid heroes={heroesResponse?.heroes ?? []} /> </TabsContent>
                    <TabsContent value="villains" >  <HeroGrid heroes={heroesResponse?.heroes ?? []} /> </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={heroesResponse?.pages ?? 0} />
            </>
        </>
    )
}
