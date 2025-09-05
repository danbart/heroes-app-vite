import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import {
    Heart
} from "lucide-react"
import { useState } from "react"
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron'


export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<
        'all' | 'favorites' | 'heroes' | 'villains'
    >('all');
    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron title="Heroic Dashboard" description="Manage your collection of heroes and villains with ease." />

                <CustomBreadcrumbs currentPage="Super Heroes" />
                {/* Stats Dashboard */}
                <HeroStats />


                {/* Tabs */}
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
                        <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setActiveTab('favorites')}>
                            <Heart className="h-4 w-4" />
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" >  <HeroGrid /> </TabsContent>
                    <TabsContent value="favorites" >  <HeroGrid /></TabsContent>
                    <TabsContent value="heroes" >  <HeroGrid /></TabsContent>
                    <TabsContent value="villains" >  <HeroGrid /></TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination />
            </>
        </>
    )
}
