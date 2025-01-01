"use client";
import React from 'react';
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
import { useRouter } from 'next/navigation';
import { ProductCard } from '../home/PoductCard';



export const useSimilar = (locale, url,name) => {
    return useQuery({
        queryKey: [name, locale],
        queryFn: () => getData(locale, url),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
    });
};

const SimilartProducts = ({type, title, url ,slug}) => {
    const t = useTranslations("main_categories");
    const locale = useLocale();
    const { data: products, isLoading, isError } = useSimilar(locale, url,title);
    const skeletonArray = Array(5).fill(null);

    if (isError) {
        return (
            <div className="my-12 text-center text-red-500">
                error
            </div>
        );
    }
    const router = useRouter()
    let url_route = type=='featured' ?  `${process.env.NEXT_PUBLIC_BASE_URL}/products/feature`:`${process.env.NEXT_PUBLIC_BASE_URL}/products?sub-category=${slug}`
    return (
        <section className="my-16 py-2 overflow-hidden">
            <div className="mx-auto px-4 xl:px-40 my-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl max-md:text-lg font-bold text-start text-darkGray">{title}</h2>
                    <button onClick={() => router.replace(url_route)}  className="bg-primary hover:bg-lightPrimary cust-trans max-sm:text-xs text-white px-4 py-2 rounded-md text-sm flex items-center justify-between gap-1 text-nowrap">
                        {t("discover_more")}
                        <FaChevronLeft className={`${locale === 'ar' ? '' : 'rotate-180'}`} />
                    </button>
                </div>
            </div>

            <div className="ps-4 xl:ps-40 relative  ">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1.5}
                    navigation={{
                        nextEl: `.button-next-f-${title}`,
                        prevEl: `.button-prev-f-${title}`,
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
                {/* <div className={`mx-auto px-4 xl:px-40 mt-4 flex gap-2 justify-end`}>
                    <button className={`button-next-f-${title} p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full flex items-center justify-center`}>
                        <FaChevronLeft className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                    <button className={`button-next-f-${title} p-2 !text-white bg-primary hover:bg-lightPrimary cust-trans rounded-full focus:outline-none flex items-center justify-center`}>
                        <FaChevronRight className={locale === 'ar' ? 'rotate-180' : ''} />
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default SimilartProducts;