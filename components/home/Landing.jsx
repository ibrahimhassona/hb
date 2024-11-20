"use client";
import { useLocale } from 'next-intl';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';  // Import pagination CSS
import 'swiper/css/autoplay'; // Import autoplay CSS
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Pagination, Autoplay } from 'swiper/modules'; // Import Pagination module
import NavBar from '../navbar/NavBar';
import { getData } from '@/utils/functions/getData';
import Link from 'next/link';

const Landing = () => {
    const locale = useLocale()
    const [sliders, setSliders] = useState([]);  // Set initial state to an empty array

    useEffect(() => {
        // Define an async function to fetch the sliders data
        const fetchSliders = async () => {
            try {
                const data = await getData(locale, 'sliders?populate[slider][populate]=*');
                setSliders(data[1].slider || []);  // Ensure data[1].slider is an array or fallback to empty array
            } catch (error) {
                console.error("Error fetching sliders:", error);  // Handle errors if any
            }
        };

        fetchSliders();  // Call the async function to fetch the data
    }, []);  // Only run once on component mount

    return (
        <section className="relative m-auto">
            <div className="bg-black/50 top-0 right-0 absolute cust-trans w-full start-0 z-40">
                <NavBar props={{ text: 'white', bg: 'primary' }} />
            </div>
            {/*=============== Main Image ============== */}
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
                {sliders.length > 0 ? (
                    sliders.map((slider, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full relative overflow-hidden">
                                <img
                                    src={slider.image.url}
                                    alt={`News view ${index + 1}`}
                                    className="w-full h-full object-cover cust-trans"
                                    loading="lazy"
                                />
                                <div className="absolute z-20 px-4 xl:px-40  bottom-20 w-[100%]  xl:w-[50%] animate-fade-down text-white">
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
                    ))
                ) : (
                    <div className='text-primary h-full flex items-center justify-center'>Loading sliders...</div>  // Show loading message while data is being fetched
                )}
            </Swiper>
        </section>
    );
};

export default Landing;
