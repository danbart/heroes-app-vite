import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { Button } from '../ui/button';

interface CustomPaginationProps {
    totalPages?: number;
}

export const CustomPagination = ({ totalPages = 1 }: CustomPaginationProps) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const pageParam = searchParams.get('page') || '1';
    const page = isNaN(+pageParam) ? 1 : +pageParam;
    const limitParam = searchParams.get('limit') || '6';
    const limit = isNaN(+limitParam) ? 6 : +limitParam;

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        searchParams.set('page', newPage.toString());
        setSearchParams(searchParams);
    }

    return (
        <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="sm" disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}>
                <ChevronLeft className="h-4 w-4" />
                Previous
            </Button>

            {
                Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                        key={index}
                        variant={index + 1 === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </Button>
                ))
            }

            {
                totalPages > limit && (
                    <Button variant="ghost" size="sm" disabled>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                )}

            <Button variant="outline" size="sm" disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}>
                Next
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
