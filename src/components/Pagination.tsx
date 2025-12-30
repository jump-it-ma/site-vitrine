import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-purple-600 disabled:pointer-events-none disabled:opacity-50"
        aria-label="Previous page"
      >
        <HiChevronLeft className="h-5 w-5" />
      </button>

      {pages.map((page) => {
        // Simple pagination logic to show limited page numbers can be added here if needed
        // For now, we show all pages as the catalog likely won't have hundreds of pages
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
              currentPage === page
                ? "border-purple-600 bg-purple-600 text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-purple-600 disabled:pointer-events-none disabled:opacity-50"
        aria-label="Next page"
      >
        <HiChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
