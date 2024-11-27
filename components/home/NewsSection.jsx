"use client"
import React from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const NewsSection = () => {
    const t = useTranslations("news");
    const locale = useLocale();

    // Sample news data
    const news = [
        { id: 1, title: 'هيبنوتك في العين', date: '12/12/2024', image: '/news/news-1.jpg', description: 'يسعد و يتشرف بنك دبي الإسلامي بجائزة على التوالي والمشاركة في أكبر حدث تقني و إقامة في المعرض الش...' },
        { id: 2, title: 'هيبنوتك في العين', date: '12/12/2024', image: '/news/news-2.jpg', description: 'يسعد و يتشرف بنك دبي الإسلامي بجائزة على التوالي والمشاركة في أكبر حدث تقني و إقامة في المعرض الش...' },
        { id: 3, title: 'هيبنوتك في العين', date: '12/12/2024', image: '/news/news-3.jpg', description: 'يسعد و يتشرف بنك دبي الإسلامي بجائزة على التوالي والمشاركة في أكبر حدث تقني و إقامة في المعرض الش...' },
        { id: 4, title: 'هيبنوتك في العين', date: '12/12/2024', image: '/news/news-4.jpg', description: 'يسعد و يتشرف بنك دبي الإسلامي بجائزة على التوالي والمشاركة في أكبر حدث تقني و إقامة في المعرض الش...' },
        { id: 5, title: 'هيبنوتك في العين', date: '12/12/2024', image: '/news/news-4.jpg', description: 'يسعد و يتشرف بنك دبي الإسلامي بجائزة على التوالي والمشاركة في أكبر حدث تقني و إقامة في المعرض الش...' },
    ];

    return (
        <div className="my-12 overflow-hidden">
            {/* Header section */}
            <div className="mx-auto px-4 xl:px-40 my-6">
                <div className="flex justify-between items-center gap-1">
                    <h2 className="text-2xl font-bold text-strat max-md:text-xl line-clamp-1 text-darkGray">{t("title")}</h2>
                    <Link href="/" className="bg-primary hover:bg-lightPrimary cust-trans max-sm:text-xs text-white px-4 py-2 rounded-md text-sm flex items-center justify-between gap-1 text-nowrap">
                        {t("discover_more")}
                        <FaChevronLeft className={`${locale === 'ar' ? '' : 'rotate-180'}`} />
                    </Link>
                </div>
            </div>

            {/* Swiper section */}
            <div className="ps-4 xl:ps-40 relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1.5}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                    }}
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                >
                    {news.map((item,index) => (
                        <SwiperSlide key={index} >
                            <div className="rounded-lg overflow-hidden m-1 shadow-sm">
                                <div className="relative h-48">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-4 bg-white flex flex-col items-start gap-2 ">
                                    <h3 className="text-lg max-sm:text-sm font-semibold text-darkGray text-right">{item.title}</h3>
                                    <p className="text-gray-600 text-sm  text-right">{item.date}</p>
                                    <p className="text-gray-700 text-sm text-right">{item.description}</p>
                                    <div className='flex items-start justify-end w-full'>
                                    <Link href="/" className={`text-sm w-fit font-semibold flex items-center gap-2 text-primary mt-2 hover:text-lightPrimary cust-trans`}>
                                        {t("read_more")}
                                        <FaChevronLeft className={` ${locale === 'ar' ? '' : 'rotate-180'}`} />
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation buttons */}
                <div className={`mx-auto px-4 xl:px-40 mt-4 flex gap-2 justify-end`}>
                    <button className="button-prev p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full flex items-center justify-center">
                        <FaChevronLeft className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                    <button className="button-next p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full focus:outline-none flex items-center justify-center">
                        <FaChevronRight className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;