"use client"
import React from 'react'
import { useSlider } from './home/Landing'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Pagination, Thumbs } from 'swiper/modules'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { IoIosArrowRoundUp } from 'react-icons/io'
import Path from './Path'

const Slider = ({ number, top, dataPath }) => {
    const locale = useLocale()
    const { data } = useSlider(locale)
    const sliders = data && data[number]?.slider || []
    return (
        <>
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
                                    <div className=' absolute top-0  right-0 w-full h-full bg-black/50 z-10'>
                                        <div className="absolute z-20 px-4 xl:px-40  bottom-20 w-[100%]  lg:w-[70%] 2xl:w-[60%] animate-fade-down text-white">
                                            {top ?
                                                <Path data={dataPath} /> :
                                                ""
                                            }
                                            <h1 className='text-[40px] max-md:text-[25px] text-primary font-bold my-4'>{slider.header}</h1>
                                            <p className='text-xl mb-10 max-md:text-sm'>{slider.description}</p>
                                            {top ?
                                                <></>
                                                :
                                                <Link href={`${top ? `${locale}/${slider.button_url}` : `${slider.button_url}`}`} className='px-4 border-lightPrimary border-2 py-2 bg-primary flex w-fit gap-1 items-center justify-between rounded-md text-white cust-trans hover:bg-lightPrimary'>
                                                    <span>{slider.button_title}</span>
                                                    <span className='bg-teal-200 rounded-md w-6 h-6 text-white flex relative'>
                                                        <IoIosArrowRoundUp size={25} className=' absolute -top-2 -right-2 rotate-45 ' />
                                                    </span>
                                                </Link>
                                            }
                                        </div>
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
        </>
    )
}

export default Slider