"use client"
import React, { useState } from 'react';
import { getData } from '@/utils/functions/getData';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FiMinimize2 } from "react-icons/fi";

const SideBar = ({ className }) => {
    const locale = useLocale();
    const [openCategories, setOpenCategories] = useState({});
    const activeSub = useSearchParams().get("sub-category");
    const searchParams = useSearchParams();
    const [activeMain, setActiveMain] = useState(searchParams.get("category") || null);
    const [closeCategories, setCloseCategories] = useState(false)
    console.log("activeMain==>", activeMain)
    // Custom hook for fetching items data
    const useCategories = (locale) => {
        const url = `main-categories?populate=*`;
        return useQuery({
            queryKey: ['categories', locale],
            queryFn: () => getData(locale, url),
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 2,
        });
    };

    // Fetch product data using the custom hook 
    const { data, error, isLoading } = useCategories(locale);

    const toggleCategory = (categoryId) => {
        setOpenCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    if (isLoading) {
        return (
            <div className="flex justify-center p-4">
                <l-waveform
                    size="35"
                    stroke="3.5"
                    speed="1"
                    color="#2dbbab"
                ></l-waveform>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 p-4">
                Error loading categories
            </div>
        );
    }
console.log("activeMain",activeMain)
    return (
        <>
            <span onClick={() => setCloseCategories(!closeCategories)} className=' z-30 top-[5px] start-5 shadow  absolute my-1 max-md:flex hidden cursor-pointer border text-darkGray border-darkGray w-fit p-1 rounded-md cust-trans hover:text-primary hover:border-primary'><FiMinimize2 size={20} /></span>
            <nav className={` ${closeCategories ? ' max-md:!w-[60%]  hidden' : ' animate-fade-up'} select-none  cust-trans max-md:absolute max-md:top-[40px] max-md:-start-0 z-30 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-start  ${className}`}>
                {data?.map((category) => (
                    <div key={category.id} className={`${closeCategories ? ' ' : ''} mb-2`}>
                        {/* Main Category */}
                        <div
                            onClick={() => { toggleCategory(category.id); setActiveMain(category.slug) }}
                            className={`${activeMain == category.slug ? 'bg-green-200' : ''} cursor-pointer flex items-center justify-between  w-[220px]  p-2 text-sm text-darkGray hover:bg-green-100 rounded-md cust-trans`}>
                            <Link
                                scroll={false}
                                href={`/${locale}/products?category=${category.slug}`}

                                className={`   `}
                            >
                                <span className="font-medium">{category.title}</span>
                            </Link>
                            <IoIosArrowDown className={`${openCategories[category.id] ? ' rotate-180' : ''} cust-trans`} />
                        </div>

                        {/* Sub Categories */}
                        {openCategories[category.id] && (
                            <div className="ml-4 mt-2 space-y-1">
                                {category.sub_categories.map((subCategory) => {

                                    return (
                                        <Link
                                            scroll={false}
                                            key={subCategory.id}
                                            onClick={() => setActiveMain(category.slug)}
                                            href={`/${locale}/products?sub-category=${subCategory.slug}`}
                                            className={`${openCategories[subCategory.id] ? 'bg-green-50' : ' '} ${activeSub == subCategory.slug ? 'bg-green-50' : ''} cust-trans animate-fade-down block max-sm:text-xs p-2 text-sm text-darkGray hover:bg-green-50 rounded-md transition-colors ms-4`}
                                        >
                                            {subCategory.title}
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </>
    );
};

export default SideBar;