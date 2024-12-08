"use client"
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { FaPhone } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

import Link from 'next/link';
const LocationPopUp = ({ item }) => {
    // ========= Hooks ===========
    const t = useTranslations("Locations")
    // const { toast } = useToast();
    // ==== Convert the time to show it =====
    const formatTime = (time) => time ? time.slice(0, 5) : '';
    // ==== Function to copy the Address ====
    const copyURL = (url) => {
        navigator.clipboard.writeText(url)
    };
    return (
        <div className='flex flex-col gap-4 max-w-[350px]'>
            <h2 className='text-xl font-semibold text-darkGray'>{t("share")}</h2>
            {/* ==================== Share part ========================== */}
            <div className='flex flex-col gap-4 px-2 text-darkGray'>
                <p className='flex items-center justify-between gap-4'><span>{`${item.address}`}</span><span><FaMapLocationDot className=' text-xl text-primary' /></span></p>
                {item.phone && <p className='flex items-center justify-between gap-4'><span>{item.phone}</span><span><FaPhone className=' text-xl text-primary' /></span></p>}
            </div>
            <h2 className='text-xl font-semibold '>{t("times")}</h2>
            {/* ==================== Time part ========================== */}
            <div className='px-2'>
                {item.branch_working_days &&
                    <p className='flex flex-col'>{item.branch_working_days.map((day, index) => (
                        <span key={index} className='flex gap-2 justify-between  items-center text-start border-b mt-1 px-1'>
                            <span className=' font-semibold'>{day.day_localization[0].name}</span>
                            <span>{`${formatTime(day.shift1_from)} - ${formatTime(day.shift1_to)}`} {day.shift2_from ? `& ${formatTime(day.shift2_from)} - ${formatTime(day.shift2_to)}` : ''} </span>
                        </span>
                    ))}
                    </p>}
            </div>
            {/* ==================== Copy Link part ========================== */}
            <div className='flex flex-col gap-2'>
                <p className=' font-semibold text-darkGray'>{t("open_map")} & {t("link_copy")}</p>
                <div className='flex gap-4 m-auto'>
                    {/* -----Copy Link---- */}
                    <span onClick={() => copyURL(item.location_link)} className=' hover:bg-primaryDark cust-trans h-[30px] w-[30px] bg-primary text-white rounded-md p-2 flex items-center justify-center cursor-pointer'>
                        <FaRegCopy className='text-xl'/>
                    </span>
                    <Link href={item.location_link} target='_blank' className='hover:bg-primaryDark cust-trans h-[30px] w-[30px] bg-primary text-white rounded-md p-2 flex items-center justify-center cursor-pointer'>
                        <FaLocationArrow className='text-xl'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LocationPopUp