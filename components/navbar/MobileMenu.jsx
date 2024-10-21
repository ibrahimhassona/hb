"use client"
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdOutlineClose } from "react-icons/md";
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the open/closed status of the menu
    const locale = useLocale(); // Get the current locale (language) of the app
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Function to toggle the menu open/close state
    };

    // Translations for the navigation links
    const t = useTranslations("nav");

    // Links data for the mobile menu
    const dataLinks = [
        { title: t("home"), href: '/', id: 1 },
        { title: t("who_are"), href: '/', id: 2 },
        { title: t("products"), href: false, id: 3 }, // 'href: false' indicates a dropdown or non-link action
        { title: t("news"), href: '/', id: 4 },
        { title: t("contactUs"), href: '/', id: 5 },
    ];

    return (
        <div>
            {/* =========== Hamburger Menu Icon And Close =========== */}
            <div className='max-md:flex hidden' onClick={toggleMenu}>
                {isOpen ? (
                    <MdOutlineClose size={30} className='text-primary hover:text-primary cust-trans animate-flip-up cursor-pointer' />
                ) : (
                    <HiMenu size={30} className='text-lightGray hover:text-primary cust-trans animate-flip-up cursor-pointer' />
                )}
            </div>
            {/* =========== End Icon =========== */}
            {/* =========== Menu Content =========== */}
            {isOpen && (
                <div className={`absolute top-[41px] ${locale === 'ar' ? 'right-0 animate-fade-left' : 'left-0 animate-fade-right'} w-[60%] cust-trans h-[calc(100vh-41px)] bg-primary bg-opacity-100 z-50 flex flex-col items-start justify-start px-2  gap-8 text-white`}>
                    <nav className="flex flex-col gap-2 items-start w-full py-4">
                        <Image src='/white-logo.png'
                            height={400}
                            width={400}
                            objectFit="contain"
                            alt='Hypnotek Logo'
                            className=' w-[70px] rounded-lg m-auto mb-4 p-2' />
                        {/* Mapping through dataLinks to create menu items */}
                        {dataLinks.map((link) => (
                            link.href ? (
                                <Link href={link.href} key={link.id} onClick={toggleMenu} className={`font-[500] px-2 py-1 rounded-sm w-full cust-trans hover:text-primary hover:bg-white ${link.id === 1 ? 'text-primary bg-white' : ''}`}>
                                    {link.title}
                                </Link>
                            ) : (
                                <button key={link.id} onClick={toggleMenu} className='font-[500] cust-trans w-full px-2 py-1 rounded-sm hover:text-primary hover:bg-white flex gap-2 items-center'>
                                    {link.title}
                                    <IoIosArrowDown />
                                </button>
                            )
                        ))}
                    </nav>
                </div>
            )}
            {/* =========== End Content =========== */}
        </div>
    );
};

export default MobileMenu;
