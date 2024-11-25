"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";
import { useCategories } from "../products/SideBar";

const FooterLink = ({ href, children }) => (
    <Link href={`/products?category=${href}`} className="hover:text-lightPrimary transition-all duration-300">
        {children}
    </Link>
);
const MainCategoryFooter = () => {
    const locale = useLocale();
    // Custom hook for fetching categories
    const { data, error, isLoading } = useCategories(locale);
    if (!data) {
        return (
            <div className="flex items-center justify-center w-full">
                {/* Spinner */}
                <span className="w-[30px] h-[30px] border-2 border-gray-100 border-t-lightPrimary rounded-full animate-spin"></span>
            </div>
        );
    }
    return (
        <ul className="flex flex-col w-full items-start justify-center gap-2">
            {data.map((category) => (
                <li key={category.id}>
                    <FooterLink href={category.slug}>{category.title}</FooterLink>
                </li>
            ))}
        </ul>

    );
};

export default MainCategoryFooter;
