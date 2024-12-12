"use client";
import React from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { getData } from '@/utils/functions/getData';
import { useQuery } from '@tanstack/react-query';
import ProductSkeleton from '../ProductSkeleton';



export const useIsFeature = (locale) => {
    const url = `products?populate=*&filters[isFeature][$eq]=true`;
    return useQuery({
        queryKey: ['isFeature', locale],
        queryFn: () => getData(locale, url),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
    });
};

const ProductCard = ({ product, locale }) => {
    const t = useTranslations("product")
    return (
        <div className="relative rounded-lg overflow-hidden shadow-md h-64 max-sm:h-[200px] group cursor-pointer">
            {product?.main_image?.url && (
                <Image
                    src={product.main_image.url}
                    alt={product.title || ''}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between max-sm:text-xs items-start flex-col gap-1 border border-[#C0C0C0] p-2 rounded-md overflow-hidden bg-black/30 backdrop-blur-lg">
                    <div className='flex items-center justify-between w-full'>
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = `/products?sub-category=${product.sub_categories[0].slug}`;
                            }}
                            className="text-[#C0C0C0] flex-1 hover:text-white cust-trans cursor-pointer"
                        >
                            {product.sub_categories[0]?.title}
                        </span>
                        {product?.colors?.length > 0 && (
                            <span className='w-fit flex items-center gap-1'>
                                {product.colors.map((color, colorIndex) => (
                                    <span
                                        key={colorIndex}
                                        style={{ backgroundColor: color.name }}
                                        className="w-5 h-5 rounded-full"
                                    />
                                ))}
                            </span>
                        )}
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-lg max-md:text-[14px] max-sm:text-xs font-semibold mb-1 text-start text-white">
                            {product?.title?.length > 15 ? `${product.title.slice(0, 15)}...` : product.title}
                        </h3>
                        <p className="text-gray-200 text-start text-sm max-md:text-[10px]">
                            {product?.price?.toLocaleString()} <span className=' text-[9px]'>{t("sar")}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeaturedProducts = ({ title }) => {
    const t = useTranslations("main_categories");
    const locale = useLocale();
    const { data: products, isLoading, isError } = useIsFeature(locale);

    const skeletonArray = Array(5).fill(null);

    if (isError) {
        return (
            <div className="my-12 text-center text-red-500">
                {t("error_loading_products")}
            </div>
        );
    }

    return (
        <section className="my-12 overflow-hidden">
            <div className="mx-auto px-4 xl:px-40 my-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl max-md:text-lg font-bold text-start text-darkGray">{title}</h2>
                    <Link href="/products/feature" className="bg-primary hover:bg-lightPrimary cust-trans max-sm:text-xs text-white px-4 py-2 rounded-md text-sm flex items-center justify-between gap-1 text-nowrap">
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
                    loop={products?.length > 3}
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
                    ) : (
                        products?.map((product, index) => (
                            <SwiperSlide key={product.id || index}>
                                <Link href={`/products/${product?.slug}`}>
                                    <ProductCard product={product} locale={locale} />
                                </Link>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
                <div className={`mx-auto px-4 xl:px-40 mt-4 flex gap-2 justify-end`}>
                    <button className="button-prev-f p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full flex items-center justify-center">
                        <FaChevronLeft className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                    <button className="button-next-f p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full focus:outline-none flex items-center justify-center">
                        <FaChevronRight className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;