import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
    return (
        <>
            <CustomJumbotron title="Search" description="Find your favorite characters, teams, and more." />

            <CustomBreadcrumbs currentPage="Search" />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Search Controls */}
            <SearchControls />
        </>
    )
}

export default SearchPage;
