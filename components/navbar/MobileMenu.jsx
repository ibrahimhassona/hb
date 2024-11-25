"use client"
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdOutlineClose } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
import { GoPlus } from "react-icons/go";
import { useLocale, useTranslations } from 'next-intl';
import { useCategories } from '../products/SideBar';
import MobileMenuProducts from './MobileMenuProducts';

const MobileMenu = ({ props }) => {
    // ===== Lang =======
    const locale = useLocale();
    // ===== Translations =======
    const t = useTranslations("nav")
    // ===== Is Open &  =======
    const [isOpen, setIsOpen] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    // ===== Is Open =======
    const { data: categories, loading } = useCategories(locale);

    const mainLinks = [
        { title: t("home"), href: '/', id: 1 },
        { title: t("who_are"), href: '/about', id: 2 },
        { title: t("products"), href: false, id: 3 },
        { title: t("news"), href: '/news', id: 4 },
        { title: t("contactUs"), href: '/contactUs', id: 5 },
    ];
    //  ======== Toggle Menu ======
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setShowProducts(false);
        setSelectedCategory(null);
    };
    //  ======== Toggle Menu ======
    const handleProductsClick = () => {
        setShowProducts(true);
        setSelectedCategory(null);
    };

    const handleBack = () => {
        if (selectedCategory) {
            setSelectedCategory(null);
        } else {
            setShowProducts(false);
        }
    };

    {/* =========  Repeated Styles =========== */ }
    const commonStyles = {
        link: "block w-full text-start text-white cust-trans hover:text-green-200 ",
        button: "flex items-center justify-between w-full cust-trans hover:text-white/80"
    };

    if (loading) {
        return (<div className="flex items-center justify-center w-full">
            {/* ------------ Spinner until data Loading ------------*/}
            <span className="w-[30px] h-[30px] border-2 border-gray-100 border-t-lightPrimary rounded-full animate-spin"></span>
        </div>)
    }
    return (
        <div className="relative">
            <div className="max-md:flex hidden" onClick={toggleMenu}>
                <HiMenu
                    size={30}
                    className={`hover:text-primary cust-trans animate-flip-up cursor-pointer ${props ? 'text-white' : 'text-lightGray'}`}
                />
            </div>

            {/* =========  Logo & Image Menu =========== */}
            {isOpen && (
                <div className={`fixed top-0 right-0 ${locale == 'ar' ? 'animate-fade-left' : 'animate-fade-right'} cust-trans w-full h-[100vh] bg-[#40C7B9] text-white z-50`}>
                    <MdOutlineClose
                        size={30}
                        className="absolute end-3 top-3 hover:text-gray-100 cust-trans animate-flip-up cursor-pointer text-white"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="px-4 py-12">
                        <Image
                            src="/white-logo.png"
                            height={70}
                            width={70}
                            alt="Logo"
                            className="mx-auto mb-6 hover:opacity-90 transition-opacity duration-300"
                        />
                        {/* =========  Main Menu Products =========== */}
                        {!showProducts ? (
                            <nav className="flex flex-col gap-4">
                                {mainLinks.map((link) => (
                                    <div key={link.id} className="border-b  border-white/20 pb-2">
                                        {link.href ? (
                                            <Link
                                                href={link.href}
                                                className={commonStyles.link}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.title}
                                            </Link>
                                        ) : (//---- If Link create Link/next else => create Button --------
                                            <button
                                                onClick={handleProductsClick}
                                                className={commonStyles.button}
                                            >
                                                {link.title}
                                                <GoPlus size={22} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        ) : (//---- Enternal Menu Items Component --------
                            <MobileMenuProducts
                                categories={categories}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                handleBack={handleBack}
                                setIsOpen={setIsOpen}
                                locale={locale}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;