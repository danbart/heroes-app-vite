import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { useSearchHero } from "@/heroes/hooks/useSearchHero";
import { useSearchParams } from "react-router";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {

    const [searchParams] = useSearchParams();
    const name = searchParams.get('name') || '';
    const selectedStrength = searchParams.get('strength') || '0';

    const { data = [] } = useSearchHero({ name, strength: selectedStrength });
    return (
        <>
            <CustomJumbotron title="Search" description="Find your favorite characters, teams, and more." />

            <CustomBreadcrumbs currentPage="Search" />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Search Controls */}
            <SearchControls />

            <HeroGrid heroes={data} />
        </>
    )
}

export default SearchPage;
