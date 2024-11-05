"use client"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Navigation, Virtual } from 'swiper/modules';
import { FaArrowLeftLong } from "react-icons/fa6";


const NewsGallery = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const thumbsSwiperRef = useRef(null)

    // ===== Button To Slide ========
    const slideNext = () => {
        if (thumbsSwiperRef.current?.swiper) {
            thumbsSwiperRef.current.swiper.slideNext()
        }
    };
    return (
        <div className='my-8 flex flex-col gap-1'>
            {/*=============== Main Image ============== */}
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                loop={true}
                modules={[FreeMode, Thumbs]}
                className='w-full max-md:h-[400px] h-[500px]'
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full relative rounded-lg overflow-hidden">
                            <img
                                src={img}
                                alt={`News view ${index + 1}`}
                                className="w-full h-full object-cover cust-trans hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* ================== Thumbnails Section ================== */}
            <div className=' relative w-full  '>
                {/*--------- Next Button ------------ */}
                <button
                    onClick={slideNext}
                    className="absolute top-1/2 end-0 z-10 text-primary  -translate-x-1/2 -translate-y-1/2"
                    aria-label="Next"
                >
                    <FaArrowLeftLong size={25} />
                </button>
                <Swiper
                    ref={thumbsSwiperRef}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={4}
                    slidesPerView={5.5}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs, Navigation]}
                    className=" h-[150px] max-md:h-[90px] w-full "
                >
                    {images.map((img, index) => (
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
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover rounded-md "
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default NewsGallery