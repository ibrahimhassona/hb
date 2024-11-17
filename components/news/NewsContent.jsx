"use client"
import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Pagination from '../products/Pagination';
import { IoIosArrowDown } from 'react-icons/io';
import { FilterButton } from './FilterButton';
import Link from 'next/link';

const NewsContent = () => {
    // State for filter section and sort selection
    const [selectedSection, setSelectedSection] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [sortOption, setSortOption] = useState('newest');
    // Sample news data array
    const newsItems = [
        {
            id: 1,
            title: 'هيبنوتك في الصين',
            date: '12/12/2024',
            description: 'نسعى و نفخر بدي في شركة هيبنوتك على التواجد والمشاركة في اكبر حدث نظلي و المقام في المعرض الق...',
            image: '/news/news-1.jpg',
        },
        {
            id: 2,
            title: 'هيبنوتك في الصين',
            date: '12/3/2024',
            description: 'نسعى و نفخر بدي في شركة هيبنوتك على التواجد والمشاركة في اكبر حدث نظلي و المقام في المعرض الق...',
            image: '/news/news-1.jpg',
        },
        {
            id: 3,
            title: 'هيبنوتك في الصين',
            date: '12/12/2024',
            description: 'نسعى و نفخر بدي في شركة هيبنوتك على التواجد والمشاركة في اكبر حدث نظلي و المقام في المعرض الق...',
            image: '/news/news-3.jpg',
        },
        {
            id: 4,
            title: 'هيبنوتك في الصين',
            date: '12/12/2024',
            description: 'نسعى و نفخر بدي في شركة هيبنوتك على التواجد والمشاركة في اكبر حدث نظلي و المقام في المعرض الق...',
            image: '/news/news-2.jpg',
        },
        {
            id: 5,
            title: 'هيبنوتك في الصين',
            date: '12/4/2024',
            description: 'نسعى و نفخر بدي في شركة هيبنوتك على التواجد والمشاركة في اكبر حدث نظلي و المقام في المعرض الق...',
            image: '/news/news-2.jpg',
        },
        {
            id: 6,
            title: 'هيبنوتك في الصين',
            date: '12/6/2024',
            description: 'نسعى و نفخر بدي في شركة هيبنوتك على التواجد والمشاركة في اكبر حدث نظلي و المقام في المعرض الق...',
            image: '/news/news-1.jpg',
        },
        {
            id: 7,
            title: 'هيبنوتك في الصين',
            date: '12/8/2024',
            description: 'نسعى و نفخر بدي في شركة هيبنوتك على التواجد والمشاركة في اكبر حدث نظلي و المقام في المعرض الق...',
            image: '/news/news-3.jpg',
        },
        {
            id: 8,
            title: 'هيبنوتك في الصين',
            date: '12/12/2024',
            description: 'نسعى و نفخر بدي في شركة هيبنوتك على التواجد والمشاركة في اكبر حدث نظلي و المقام في المعرض الق...',
            image: '/news/news-2.jpg',
        },
        {
            id: 9,
            title: 'هيبنوتك في الصين',
            date: '12/12/2024',
            description: 'نسعى و نفخر بدي في شركة هيبنوتك على التواجد والمشاركة في اكبر حدث نظلي و المقام في المعرض الق...',
            image: '/news/news-3.jpg',
        },
    ];
     // Handle filter section click
     const handleSectionClick = (section) => {
        if (selectedSection === section) {
            setSelectedSection('');
            setIsFilterOpen(false);
        } else {
            setSelectedSection(section);
            setIsFilterOpen(true);
        }
    };

    // Handle sort selection
    const handleSortChange = (option) => {
        setSortOption(option);
        setIsFilterOpen(false);
    };


    return (
        <div className="px-4 xl:px-40 mx-auto my-8">
            {/* ---------------Main Header Section------------- */}
            <div className="flex justify-between items-center mb-8 relative">
                <h1 className="text-3xl font-bold text-darkGray">أخبارنا</h1>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <FilterButton
                            title="الترتيب حسب"
                            isActive={selectedSection === 'sort'}
                            onClick={() => handleSectionClick('sort')}
                        />
                        {/* Filter Dropdown Menu */}
                        {isFilterOpen && selectedSection === 'sort' && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <div className="py-1">
                                    <button
                                        onClick={() => handleSortChange('newest')}
                                        className={`block w-full text-right px-4 py-2 text-sm ${sortOption === 'newest' ? 'text-primary bg-teal-50' : 'text-darkGray hover:bg-gray-100'}`}
                                    >
                                        الأحدث
                                    </button>
                                    <button
                                        onClick={() => handleSortChange('oldest')}
                                        className={`block w-full text-right px-4 py-2 text-sm ${sortOption === 'oldest' ? 'text-primary bg-teal-50' : 'text-darkGray hover:bg-gray-100'}`}
                                    >
                                        الأقدم
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ---------------News Grid Section------------- */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {newsItems.map((item) => (
                    // =========== News Item =========
                    <Card key={item.id} item={item}  />
                ))}
            </div>
            <Pagination />
        </div>
    );
};


const Card =({item})=>{
    return(
        <div className="bg-white rounded-lg overflow-hidden hover:shadow-md cust-trans cursor-pointer shadow-sm">
        <div className="relative h-48 max-md:h-40 overflow-hidden">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="p-4 flex flex-col gap-2">
            <div className="flex items-start gap-2 flex-col">
                <h2 className="text-xl max-md:text-sm font-bold text-darkGray">{item.title}</h2>
                <span className="text-sm text-gray-400">{item.date}</span>
            </div>
            <p className="text-darkGray max-md:text-xs mb-4 max-md:mb-2 text-right">{item.description}</p>
            <Link href={`/news/dd`} className="flex items-center justify-end text-primary hover:text-lightPrimary cust-trans gap-2">
                <span className="text-sm">اقرأ اكثر</span>
                <FaChevronLeft className="w-4 h-4 ml-1" />
            </Link>
        </div>
    </div>
    )
}
export default NewsContent;