"use client"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Navigation, Virtual } from 'swiper/modules';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineWavingHand } from "react-icons/md";
import { useTranslations } from 'next-intl';

const GalleryProduct = ({ images,isFeature }) => {
    const t=useTranslations("product")
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const thumbsSwiperRef = useRef(null);


    const slideNext = () => {
        if (thumbsSwiperRef.current?.swiper) {
            thumbsSwiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="w-1/2 max-lg:w-full flex items-start gap-2 max-md:gap-1 max-md:w-full">
            {/* ================== Thumbnails Section ================== */}
            <div className="relative flex flex-col w-20 max-md:w-12 h-[450px] max-md:h-[300px]  ">
                {/* Thumbnails Swiper */}
                <Swiper
                    ref={thumbsSwiperRef}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={2}
                    slidesPerView={4.5}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs, Navigation]}
                    direction="vertical"
                    className=" w-20 max-md:w-12 h-[450px] max-md:h-[300px] "
                >
                    {images && images.map((img, index) => (
                        <SwiperSlide key={index} className='h-full'>
                            <div
                                onClick={() => setActiveIndex(prev => index)}
                                className={`w-full h-full relative cursor-pointer cust-trans overflow-hidden
                                    ${activeIndex === index
                                        ? 'opacity-100 border-2 border-primary rounded-md shadow-lg'
                                        : 'opacity-30 hover:opacity-75 border border-transparent'
                                    }`}
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${img.formats?.medium.url}`}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover rounded-md "
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/*--------- Next Button ------------ */}
                <button
                    onClick={slideNext}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10 text-primary hover:scale-110 transition-transform"
                    aria-label="Next"
                >
                    <IoIosArrowDown size={30} />
                </button>
            </div>
            {/*=============== Main Image ============== */}
            <Swiper
                spaceBetween={10}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs, Virtual]}
                className="flex-1 h-[450px] max-md:h-[300px] max-md:w-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                direction="vertical"
            >
            {isFeature&& <div className='absolute bg-red-500 top-0 -end-1 flex items-center gap-2 px-2 py-1 rounded-b-md text-white z-20'>
                <MdOutlineWavingHand className=' animate-wiggle-more repeat-infinite' size={25}/>
                <span className='text-sm'>{t('feature')}</span>
                </div>}

                {images && images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full relative rounded-lg overflow-hidden">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${img.formats?.medium.url}`}
                                alt={`Product view ${index + 1}`}
                                className="w-full h-full object-cover cust-trans hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default GalleryProduct;