"use client";
import { useLocale } from 'next-intl';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';  // Import pagination CSS
import 'swiper/css/autoplay'; // Import autoplay CSS
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Pagination, Autoplay } from 'swiper/modules'; // Import Pagination module
import NavBar from '../navbar/NavBar';
import { getData } from '@/utils/functions/getData';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

// ======== Hook to fetch slider =========
export const useSlider = (locale) => {
    const url = 'sliders?populate[slider][populate]=*'
    return useQuery({
        queryKey: ['sliders', locale],
        queryFn: () => getData(locale, url),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
    })
}
const Landing = () => {
    const locale = useLocale()
    const { data, loading } = useSlider(locale)
    const sliders = data && data[1]?.slider || []
    return (
        <section className="relative m-auto">
            <div className="bg-black/50 top-0 right-0 absolute cust-trans w-full start-0 z-40">
                <NavBar props={{ text: 'white', bg: 'primary' }} />
            </div>
            {/*=============== Main Image ============== */}
            {data ?
                <Swiper
                    spaceBetween={10}
                    loop={true}
                    modules={[FreeMode, Thumbs, Pagination, Autoplay]}  // Include Pagination module here
                    className="w-full h-[600px] max-md:h-[400px]"
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {
                        sliders && sliders.map((slider, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full relative overflow-hidden">
                                    <img
                                        src={slider.image?.url}
                                        alt={`News view ${index + 1}`}
                                        className="w-full h-full object-cover cust-trans"
                                        loading="lazy"
                                    />
                                    <div className="absolute z-20 px-4 xl:px-40  bottom-20 w-[100%]  lg:w-[70%] 2xl:w-[60%] animate-fade-down text-white">
                                        <h1 className='text-[40px] max-md:text-[25px] text-primary font-bold my-4'>{slider.header}</h1>
                                        <p className='text-xl mb-10'>{slider.description}</p>
                                        <Link
                                            className='max-sm:flex max-sm:items-center justify-center bg-primary cust-trans hover:bg-lightPrimary text-white w-full border-lightPrimary border-2 px-6 max-sm:px-2 max-sm:text-sm py-1 rounded-md '
                                            href={`${locale}/${slider.button_url}`}>
                                            <span>{slider.button_title}</span>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                : <div className='text-white bg-black/80  flex items-center justify-center h-[600px] max-md:h-[400px]'>
                    <div className="flex items-center justify-center w-full">
                        {/* Spinner */}
                        <span className="w-[50px] h-[50px] border-2 border-gray-100 border-t-lightPrimary rounded-full animate-spin"></span>
                    </div>
                </div>
            }
        </section>
    );
};

export default Landing;
