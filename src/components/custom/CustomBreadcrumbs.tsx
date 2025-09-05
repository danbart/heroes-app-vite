import { Link } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";


interface Breadcrumb {
    label: string;
    to: string;
}

interface CustomBreadcrumbsProps {
    currentPage?: string;
    breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: CustomBreadcrumbsProps) => {
    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.map((crumb) => (
                    <div key={crumb.to} className="flex items-center">
                        <BreadcrumbSeparator className="mx-2" />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={crumb.to}>{crumb.label}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </div>
                ))}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
