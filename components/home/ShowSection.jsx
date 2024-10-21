"use client"
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

const ShowSection = () => {
    return (
        <div className="bg-[url('/bg-section.png')] bg-cover bg-center h-[600px] max-md:h-[450px] my-6 overflow-hidden">
            <div className='relative h-full w-full'>
                <Item
                    position='top-8 right-8'
                    popupPosition='right-8 '
                    title="جهاز تعطير ذكي"
                    subtitle="سيدار - تحكم ذكي"
                    image="/section1/card_1.png"
                    price="2,399 ريال"
                    rope='border-primary border w-6 h-[1px] top-3 right-2'
                />
                <Item
                    position='top-1/4 left-[15%]'
                    popupPosition='top-0 left-8'
                    title="ستائر ذكية"
                    subtitle="تحكم آلي بالإضاءة"
                    image="/section1/card_2.png"
                    price="1,999 ريال"
                    rope='border-primary border w-8 h-[1px] top-3 left-0'
                />
                <Item
                    position='top-[44%] left-[32%]'
                    popupPosition='top-0 left-8'
                    title="أجهزة التعطير الذكية"
                    subtitle="سيدار جهاز تعطير ذكي"
                    image="/section1/card_3.png"
                    price="1,399 ريال"
                    rope='border-primary border w-8 h-[1px] top-3 left-0'
                />
                <Item
                    position='bottom-16 right-1/4'
                    popupPosition='bottom-8 right-1'
                    title="طاولة جانبية"
                    subtitle="إضافة أنيقة للغرفة"
                    image="/section1/card_4.png"
                    price="899 ريال"
                    rope='border-primary border w-[1px] h-8 bottom-0 right-3'
                />
            </div>
        </div>
    );
};

const Item = ({ position, popupPosition, title, subtitle, image, price, rope }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`absolute ${position} cust-trans cursor-pointer`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className={`h-6 w-6 rounded-full border-teal-500 border-2 absolute z-20 flex items-center justify-center ${hovered ? 'bg-teal-500' : ''}`}>
                <span className={`h-2 w-2 rounded-full ${hovered ? 'bg-white' : 'bg-teal-500'}`}></span>
            </span>

            {hovered && (
                <>
                    {/* ======== Rope ======== */}
                    <span className={`absolute animate-flip-up cust-trans ${rope}`}></span>
                    <div className={`absolute cust-trans animate-flip-up ${popupPosition} backdrop-blur-sm bg-black/30  rounded-lg overflow-hidden w-64 z-30`}>
                        <div className="flex items-center p-3 gap-2 ">
                            <img src={image} alt={title} className="h-16 w-16 rounded-md object-cover" />
                            <div className="ml-3">
                                <h3 className="text-sm font-semibold text-teal-500">{title}</h3>
                                <p className="text-xs text-white mt-1">{subtitle}</p>
                                <p className="text-xs text-white mt-1">تبدأ من <span className='text-teal-500'>{price}</span></p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ShowSection;