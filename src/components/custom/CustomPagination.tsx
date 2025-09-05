import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '../ui/button';

interface CustomPaginationProps {
    totalPages?: number;
    limit?: number;
    currentPage?: number;
    onPageChange?: (page: number) => void;
}

export const CustomPagination = ({ totalPages = 110, limit = 5, currentPage = 1, onPageChange }: CustomPaginationProps) => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="sm" disabled={currentPage === 1}>
                <ChevronLeft className="h-4 w-4" />
                Previous
            </Button>

            {
                Array.from({ length: Math.min(totalPages, limit) }, (_, i) => i + 1).map(page => (
                    <Button
                        key={page}
                        variant={page === currentPage ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => onPageChange && onPageChange(page)}
                    >
                        {page}
                    </Button>
                ))
            }

            {
                totalPages > limit && (
                    <Button variant="ghost" size="sm" disabled>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                )}

            <Button variant="outline" size="sm" disabled={currentPage === totalPages}>
                Next
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
