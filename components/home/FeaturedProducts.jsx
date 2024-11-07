"use client";

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

const FeaturedProducts = ({title}) => {
    const t = useTranslations("main_categories");
    const locale = useLocale();
    const products = [
        { id: 1, name: 'سيدار جهاز تعطير', price: 499, image: '/section2/curs-1.png' },
        { id: 2, name: 'إضاءة مكتب', price: 499, image: '/section2/curs-2.png' },
        { id: 3, name: 'منقي هواء', price: 499, image: '/section2/curs-3.png' },
        { id: 4, name: 'منقي هواء', price: 499, image: '/section2/curs-4.png' },
        { id: 5, name: 'منقي هواء', price: 499, image: '/section2/curs-5.png' },
    ];

    return (
        <div className="my-12 overflow-hidden">
            <div className="mx-auto px-4 xl:px-40 my-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl max-md:text-xl font-bold text-right text-darkGray">{title}</h2>
                    <Link href="/" className="bg-primary hover:bg-lightPrimary cust-trans max-sm:text-xs text-white px-4 py-2 rounded-md text-sm flex items-center justify-between gap-1 text-nowrap">
                        {t("discover_more")}
                        <FaChevronLeft className={`${locale === 'ar' ? '' : 'rotate-180'}`} />
                    </Link>
                </div>
            </div>

            <div className="ps-4 xl:ps-40 relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1.5}
                    navigation={{
                        nextEl: '.button-next-f',
                        prevEl: '.button-prev-f',
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
                    {products.map((product, index) => (
                        <SwiperSlide key={index} >
                            <div className="relative rounded-lg overflow-hidden shadow-md h-64 max-sm:h-[200px]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <div className="flex justify-between max-sm:text-xs items-start flex-col gap-1 border border-[#C0C0C0] p-2 rounded-md overflow-hidden bg-black/30 backdrop-blur-lg">
                                        <h2 className="text-[#C0C0C0]">{product.name}</h2>
                                        <div className="flex justify-between items-center w-full ">
                                            <h3 className="text-lg max-sm:text-xs font-semibold mb-1 text-right text-white">{product.name}</h3>
                                            <p className="text-gray-200 text-right">سعر {product.price} ريال</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation buttons */}
                <div className={`mx-auto px-4 xl:px-40 mt-4 flex gap-2 justify-end`}>
                    <button className="button-prev-f p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full flex items-center justify-center">
                        <FaChevronLeft className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                    <button className="button-next-f p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full focus:outline-none flex items-center justify-center">
                        <FaChevronRight className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;

