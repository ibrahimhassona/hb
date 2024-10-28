"use client"
import { useState } from "react";
const Pagination = ({ currentPage = 5, totalPages = 20, onPageChange }) => {
    const [activePage, setActivePage] = useState(currentPage);
    const handlePageChange = (page) => {
        setActivePage(page);
        onPageChange?.(page);
    };
    const renderPageNumbers = () => {
        const pages = [];
        let startPage = Math.max(1, activePage - 2);
        let endPage = Math.min(totalPages, startPage + 4);

        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }

        // First page
        if (startPage > 1) {
            pages.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className="px-3 py-1 max-sm:p-1 text-sm text-gray-600 hover:text-emerald-600 rounded-md"
                >
                    1
                </button>
            );
            if (startPage > 2) {
                pages.push(
                    <span key="startEllipsis" className="px-2 text-gray-400">
                        ...
                    </span>
                );
            }
        }

        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 max-sm:px-1 py-1 text-sm rounded-md cust-trans ${activePage === i
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:bg-teal-50 hover:text-primary'
                        }`}
                >
                    {i}
                </button>
            );
        }

        // Last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(
                    <span key="endEllipsis" className="px-2 text-gray-400">
                        ...
                    </span>
                );
            }
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className="px-3 py-1 text-sm text-gray-600 hover:text-emerald-600 rounded-md"
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-1 py-12 max-sm:w-[90%] m-auto text-xs">
            {/* Previous button */}
            <button
                onClick={() => handlePageChange(Math.max(1, activePage - 1))}
                disabled={activePage === 1}
                className="p-2 text-gray-600 hover:text-emerald-600 disabled:opacity-50 disabled:hover:text-gray-600"
            >
                <svg
                    className="w-5 h-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            {/* Page numbers */}
            {renderPageNumbers()}

            {/* Next button */}
            <button
                onClick={() => handlePageChange(Math.min(totalPages, activePage + 1))}
                disabled={activePage === totalPages}
                className="p-2 text-gray-600 hover:text-emerald-600 disabled:opacity-50 disabled:hover:text-gray-600"
            >
                <svg
                    className="w-5 h-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};
export default Pagination