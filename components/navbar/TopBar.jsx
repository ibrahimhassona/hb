"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { PiArrowSquareOutLight } from "react-icons/pi"
import LangSwitcher from './LangSwitcher'
import MobileMenu from './MobileMenu'
import SearchCtrl from './SearchCtrl'
const TopBar = ({ props }) => {
    const t = useTranslations("nav")
    const text = props?.text
    return (
        <div className={`flex h-[40px] justify-between relative items-center m-auto text-sm  max-md:shadow-sm bg-transparent text-${text}`}>
            {/* ---- LOGO AND TITLE ------ */}
            <div className="flex items-center gap-1 justify-between">
                <Image src='/MHG-logo.png' height={100} width={100} alt='MHG' className="w-[40px]" />
                <h2 className={`text-${text ? text :'[#2d75bb]'} max-sm:font-[400] max-sm:w-[130px] text-xs font-[500] `}>{t("mhg")}</h2>
            </div>
            {/*--------- Second Section --------*/}
            <div className="flex items-center justify-center gap-2 ">
                {/* ====== Search ===== */}
                <SearchCtrl props={props}/>
                {/* ====== Language Switcher ===== */}
                <LangSwitcher props={props} />
                {/* ====== Link ===== */}
                <Link href="/cms/where-to-buy" className={`bg-primary items-center  rounded-sm py-1 px-2 m-0 flex hover:bg-lightPrimary cust-trans text-white gap-1 max-md:hidden`}>
                    <span className='max-sm:font-[300] text-xs'>{t("btn")}</span>
                    <PiArrowSquareOutLight size={25} className="text-white" />
                </Link>
                {/* ===== Mobile Menu ======= */}
                <MobileMenu props={props} />
            </div>
        </div>
    )
}

export default TopBar