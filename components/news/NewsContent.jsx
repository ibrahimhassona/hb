"use client"
import React, { useMemo, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FilterButton } from './FilterButton';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useNews } from '../home/NewsSection';
import parse from 'html-react-parser'
import Loader from '../Loader';

const NewsContent = () => {
    // Sample news data array 
    const { data, isLoading } = useNews()
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState('');
    const [sortOption, setSortOption] = useState('newest');

    // Sort handlers
    const handleSectionClick = (section) => {
        setSelectedSection(prevSection => {
            const newSection = prevSection === section ? '' : section;
            setIsFilterOpen(!!newSection);
            return newSection;
        });
    };

    const handleSortChange = (option) => {
        setSortOption(option);
        setIsFilterOpen(false);
    };
    // Sort the data
    const sortedData = useMemo(() => {
        if (!data) return [];

        return [...data].sort((a, b) => {
            if (sortOption === 'newest') {
                return new Date(b.publishedAt) - new Date(a.publishedAt);
            } else {
                return new Date(a.publishedAt) - new Date(b.publishedAt);
            }
        });
    }, [data, sortOption]);
    const t = useTranslations("news")
    const locale = useLocale()

    return (
        <div className="px-4 xl:px-40 mx-auto mt-10 mb-24">
            {/* ---------------Main Header Section------------- */}
            <div className="flex justify-between items-center mb-8 relative">
                <h1 className="text-3xl font-bold text-darkGray">{t("our_news")}</h1>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <FilterButton
                            title={sortOption == 'newest' ? t("newest") : t("oldest")}
                            isActive={selectedSection === 'sort'}
                            onClick={() => handleSectionClick('sort')}
                        />
                        {/* Filter Dropdown Menu */}
                        {isFilterOpen && selectedSection === 'sort' && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <div className="py-1">
                                    <button
                                        onClick={() => handleSortChange('newest')}
                                        className={`block w-full text-right px-4 py-2 text-sm ${sortOption === 'newest' ? 'text-primary bg-teal-50' : 'text-darkGray hover:bg-gray-100'
                                            }`}
                                    >
                                        {t("newest")}
                                    </button>
                                    <button
                                        onClick={() => handleSortChange('oldest')}
                                        className={`block w-full text-right px-4 py-2 text-sm ${sortOption === 'oldest' ? 'text-primary bg-teal-50' : 'text-darkGray hover:bg-gray-100'
                                            }`}
                                    >
                                        {t("oldest")}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ---------------News Grid Section------------- */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data ? sortedData.map((item) => (
                    // =========== News Item =========
                    <Card key={item.id} item={item} t={t} locale={locale} />
                )) : <Loader />}
            </div>
            {/* <Pagination /> */}
            {/* <LoadMore /> */}
        </div>
    );
};


const Card = ({ item, t, locale }) => {

    return (
        <div className="bg-white rounded-lg overflow-hidden hover:shadow-md cust-trans cursor-pointer shadow-sm">
            <div className="relative h-48 max-md:h-40 overflow-hidden">
                <img
                    src={item.image[0]?.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col gap-2 max-sm:gap-0">
                <div className="flex items-start gap-2 flex-col">
                    <h2 className=" max-md:text-sm font-bold text-darkGray">{item.title}</h2>
                    <span className="text-sm text-gray-400">{new Date(item.createdAt).toLocaleDateString(locale)}</span>
                </div>
                <div className='text-sm max-sm:line-clamp-2'>{parse(item.short_description.slice(0, 100))}......</div>
                <Link href={`/news/${item.slug}`} className="flex items-center justify-end text-primary hover:text-lightPrimary cust-trans gap-2">
                    <span className="text-sm">{t("read_more")}</span>
                    <FaChevronLeft className={`ml-1 ${locale == 'en' ? 'rotate-180' : ''}`} />
                </Link>
            </div>
        </div>
    )
}
export default NewsContent;