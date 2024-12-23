"use client"
import React from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import parse from 'html-react-parser'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/utils/functions/getData';
import ProductSkeleton from '../ProductSkeleton';
export const useNews = (value, single) => {
    const url = 'news?populate=*'
    return useQuery({
        queryKey: ['news', single ? value : null],
        queryFn: () => getData('ar', single ? `${url + `&filters[slug][$eq]=${value}`}` : url),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
    })
}
const NewsSection = () => {
    const t = useTranslations("news");
    const locale = useLocale();
    const { data, isLoading } = useNews()
    const skeletonArray = Array(5).fill(null);
    console.log('all data =====>', data)
    return (
        <div className="my-12 overflow-hidden">
            {/* Header section */}
            <div className="mx-auto px-4 xl:px-40 my-6">
                <div className="flex justify-between items-center gap-1">
                    <h2 className="text-2xl font-bold text-right max-md:text-xl line-clamp-1">{t("title")}</h2>
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
                    {isLoading ? (
                        skeletonArray.map((_, index) => (
                            <SwiperSlide key={`skeleton-${index}`}>
                                <ProductSkeleton />
                            </SwiperSlide>
                        ))
                    ) : data.map((item, index) => (
                        <SwiperSlide key={index} >
                            <div className="rounded-lg overflow-hidden m-1 shadow-sm">
                                <div className="relative h-48">
                                    <Image
                                        src={item.image[0]?.url}
                                        alt={item.title}
                                        width={200}
                                        height={200}
                                        className="w-full h-full"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        loading='lazy'
                                    />
                                </div>
                                <div className="p-4 bg-white flex flex-col items-start gap-2 ">
                                    <h3 className="text-lg max-sm:text-sm font-semibold  text-right">{item.title}</h3>
                                    <p className="text-gray-600 text-xs  text-start">{new Date(item.createdAt).toLocaleDateString(locale)}</p>
                                    {/* ------- Description -------- */}
                                    <div>{parse(item.short_description.slice(0, 100))}......</div>
                                    <div className='flex items-start justify-end w-full'>
                                        <Link href={`/news/${item.slug}`} className={`text-sm w-fit font-semibold flex items-center gap-2 text-primary mt-2 hover:text-lightPrimary cust-trans`}>
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
                    <button name='left' className="button-prev p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full flex items-center justify-center">
                        <FaChevronLeft className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                    <button name='right' className="button-next p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full focus:outline-none flex items-center justify-center">
                        <FaChevronRight className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;