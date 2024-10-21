"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiArrowSquareOutLight } from "react-icons/pi"
import LangSwitcher from './LangSwitcher'
import { IoIosSearch } from "react-icons/io";
import MobileMenu from './MobileMenu'
const TopBar = () => {
    const t = useTranslations("nav")


    return (
        <div className="flex h-[40px] justify-between items-center m-auto text-sm  max-md:shadow-sm">
            {/* ---- LOGO AND TITLE ------ */}
            <div className="flex items-center gap-1">
                <Image src='/MHG-logo.png' height={100} width={100} alt='MHG' className="w-[40px]" />
                <h2 className='text-[#006EB6] max-sm:font-[400] max-sm:w-[130px] text-xs font-[500]'>{t("mhg")}</h2>
            </div>
            {/*--------- Second Section --------*/}
            <div className="flex items-center justify-center gap-2 ">
                {/* ====== Search ===== */}
                <div className=" flex items-center">
                    <button className='cursor-pointer '>
                        <IoIosSearch size={20} className='text-lightGray ' />
                    </button>
                </div>
                {/* ====== Language Switcher ===== */}
                <LangSwitcher />
                {/* ====== Link ===== */}
                <Link href="/" className='bg-primary items-center  rounded-sm py-1 px-2 m-0 flex text-white gap-1 max-md:hidden'>
                    <span className='max-sm:font-[300] text-xs'>{t("btn")}</span>
                    <PiArrowSquareOutLight size={25} className="text-white" />
                </Link>
                {/* ===== Mobile Menu ======= */}
                <MobileMenu />
            </div>
        </div>
    )
}

export default TopBar