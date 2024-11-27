
"use client"
import React, { useEffect, useState } from 'react';
import { getData } from '@/utils/functions/getData';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import { IoIosArrowDown } from 'react-icons/io';
import { useSearchParams, useRouter } from 'next/navigation';
import { FiMinimize2 } from "react-icons/fi";
// Custom hook for fetching categories
export const useCategories = (locale) => {
    const url = `main-categories?populate=*`;
    return useQuery({
        queryKey: ['categories', locale],
        queryFn: () => getData(locale, url),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
    });
};
const SideBar = ({ className }) => {
    // ------- Translation -------
    const t = useTranslations("product")
    // ------- Local-------
    const locale = useLocale();
    // ------- Router-------
    const router = useRouter();
    // ------- searchParams -------
    const searchParams = useSearchParams();
    // ------- States -------
    const [openCategories, setOpenCategories] = useState({});
    const [closeCategories, setCloseCategories] = useState(false);
    const [activeStates, setActiveStates] = useState({
        main: searchParams.get("category") || null,
        sub: searchParams.get("sub-category") || null
    });



    const { data, error, isLoading } = useCategories(locale);

    // Effect to sync URL params with state
    useEffect(() => {
        if (!data) return;

        const category = searchParams.get("category");
        const subCategory = searchParams.get("sub-category");

        if (subCategory) {
            // Find the main category for this subcategory
            const mainCategory = data.find(cat =>
                cat.sub_categories.some(sub => sub.slug === subCategory)
            );

            if (mainCategory) {// if main category founded
                setActiveStates({
                    main: mainCategory.slug, //--from find function
                    sub: subCategory //--from search params
                });

                // Open the parent category
                setOpenCategories(prev => ({
                    ...prev,
                    [mainCategory.id]: true
                }));
            }
        } else if (category) {
            setActiveStates({
                main: category,
                sub: null
            });

            // Find and open the category
            const categoryItem = data.find(cat => cat.slug === category);
            if (categoryItem) {
                setOpenCategories(prev => ({
                    ...prev,
                    [categoryItem.id]: true
                }));
            }
        }
    }, [searchParams, data]);

    // Handle main category click
    const handleCategoryClick = (category) => {
        // Toggle category expansion
        setOpenCategories(prev => ({
            ...prev,
            [category.id]: !prev[category.id]
        }));

        // Update states and URL
        setActiveStates({
            main: category.slug,
            sub: null  // Clear sub-category when main category is clicked
        });

        router.push(`/${locale}/products?category=${category.slug}`, { scroll: false });
    };

    // Handle sub-category click
    const handleSubCategoryClick = (category, subCategory) => {
        // Update states
        setActiveStates({
            main: category.slug,
            sub: subCategory.slug
        });

        // Ensure parent category is open
        setOpenCategories(prev => ({
            ...prev,
            [category.id]: true
        }));

        // Update URL with sub-category parameter
        const newUrl = `/${locale}/products?sub-category=${subCategory.slug}`;
        router.push(newUrl, { scroll: false });
    };

    return (
        <>
            <div className='flex items-center gap-2 flex-row z-30 top-[5px] start-5  absolute'>
                <span
                    onClick={() => setCloseCategories(!closeCategories)}
                    className=" shadow my-1 max-md:flex hidden cursor-pointer border text-darkGray border-darkGray w-fit p-1 rounded-md cust-trans hover:text-primary hover:border-primary"
                >
                    <FiMinimize2 size={20} />
                </span>
                {closeCategories && <span className='text-darkGray hidden  max-md:flex cust-trans animate-flip-up'>{t("open_menu")}</span>}
            </div>
            <nav className={`${closeCategories ? 'max-md:!w-[60%] hidden' : 'animate-fade-up'}  select-none cust-trans max-md:absolute max-md:top-[40px] max-md:-start-0 z-30 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-start ${className}`}>
                {data?.map((category) => (
                    <div key={category.id} className="mb-2">
                        {/* Main Category */}
                        <div
                            className={`${activeStates.main == category.slug ? 'bg-green-200 text-primary' : ''} cursor-pointer flex items-center justify-between w-[220px] p-2 text-sm text-darkGray hover:bg-green-100 rounded-md cust-trans`}
                        >
                            <div
                                onClick={() => handleCategoryClick(category)}
                                className="flex-1 font-medium"
                            >
                                {category.title}
                            </div>
                            <IoIosArrowDown
                                className={`${openCategories[category.id] ? 'rotate-180' : ''} cust-trans`}
                                onClick={() => handleCategoryClick(category)}
                            />
                        </div>

                        {/* Sub Categories */}
                        {openCategories[category.id] && (
                            <div className="ml-4 mt-2 space-y-1">
                                {category.sub_categories.map((subCategory) => (
                                    <div
                                        key={subCategory.id}
                                        onClick={() => handleSubCategoryClick(category, subCategory)}
                                        className={`
                                            ${activeStates.sub === subCategory.slug ? 'bg-green-50 text-primary' : ''}
                                            cursor-pointer
                                            cust-trans
                                            animate-fade-down
                                            block
                                            max-sm:text-xs
                                            p-2
                                            text-sm
                                            text-darkGray
                                            hover:bg-green-50
                                            rounded-md
                                            transition-colors
                                            ms-4
                                        `}
                                    >
                                        {subCategory.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </>
    );
};

export default SideBar;