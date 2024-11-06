"use client"
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import { GoPlus } from "react-icons/go";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useLocale } from 'next-intl';
/**
 * قائمة متنقلة تتكيف مع الشاشات الصغيرة
 * @param {Object} props - خصائص المكون
 * @returns {JSX.Element} مكون القائمة المتنقلة
 */
const MobileMenu = ({ props }) => {
    // حالات المكون
    const [isOpen, setIsOpen] = useState(false);                    // حالة فتح/إغلاق القائمة
    const [showProducts, setShowProducts] = useState(false);        // عرض قائمة المنتجات
    const [selectedCategory, setSelectedCategory] = useState(null); // الفئة المختارة
    const locale = useLocale()
    // عناصر التنقل الرئيسية
    const mainLinks = [
        { title: "الرئيسية", href: '/', id: 1 },
        { title: "من نحن", href: '/about', id: 2 },
        { title: "المنتجات", href: false, id: 3 },
        { title: "الأخبار", href: '/news', id: 4 },
        { title: "تواصل معنا", href: '/contactUs', id: 5 },
    ];

    // تصنيفات المنتجات وعناصرها
    const menuItems = {
        'الحياة الذكية': [
            { id: 'smart-1', name: 'مفاتيح ذكية' },
            { id: 'smart-2', name: 'مراقبة الضغط الذكية' },
            { id: 'smart-3', name: 'مكيفات الهواء' },
            { id: 'smart-4', name: 'محابس ذكية' },
            { id: 'smart-5', name: 'ستائر ذكية' },
            { id: 'smart-6', name: 'قفل الباب الذكي' },
            { id: 'smart-7', name: 'ميزان ذكي' }
        ],
        'الإضاءة الذكية': [
            { id: 'light-1', name: 'إضاءة أرضية' },
            { id: 'light-2', name: 'إضاءة طاولة' },
            { id: 'light-3', name: 'إضاءة معلقة' },
            { id: 'light-4', name: 'إضاءة مخفية' }
        ],
        'الأجهزة متعددة الاستخدام': [
            { id: 'multi-1', name: 'أجهزة التحضير الذكية' },
            { id: 'multi-2', name: 'الجرائد الذكية' },
            { id: 'multi-3', name: 'اندرويد تي' },
            { id: 'multi-4', name: 'مرآة ذكية' },
            { id: 'multi-5', name: 'حامل أكواب وسجائر' }
        ]
    };

    /**
     * تبديل حالة القائمة (فتح/إغلاق)
     */
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setShowProducts(false);
        setSelectedCategory(null);
    };

    /**
     * معالجة النقر على زر المنتجات
     */
    const handleProductsClick = () => {
        setShowProducts(true);
        setSelectedCategory(null);
    };

    /**
     * معالجة زر الرجوع
     */
    const handleBack = () => {
        if (selectedCategory) {
            setSelectedCategory(null);
        } else {
            setShowProducts(false);
        }
    };

    // الأنماط المشتركة للروابط والأزرار
    const commonStyles = {
        link: "block w-full text-right text-lg cust-trans hover:text-white/80 ",
        button: "flex items-center justify-between w-full text-lg cust-trans hover:text-white/80 ",
        categoryButton: "flex items-center justify-between border-b border-white/20 pb-2 text-lg cust-trans hover:text-white/80 ",
        productLink: "border-b border-white/20 pb-2 text-lg text-right cust-trans hover:text-white/80"
    };

    return (
        <div className="relative">
            {/* زر القائمة */}
            <div className="max-md:flex hidden" onClick={toggleMenu}>
                <HiMenu
                    size={30}
                    className={` hover:text-primary cust-trans animate-flip-up cursor-pointer cust-trans ${props ? 'text-white' : 'text-lightGray'}`}
                />
            </div>

            {/* محتوى القائمة المتنقلة */}
            {isOpen && (
                <div className={`fixed top-0 right-0 ${locale == 'ar' ? 'animate-fade-left' : 'animate-fade-right'} cust-trans w-full h-[100vh] bg-[#40C7B9] text-white z-50`}>
                    <MdOutlineClose
                        size={30}
                        className=" absolute end-3 top-3 hover:text-gray-100 cust-trans animate-flip-up cursor-pointer text-white cust-trans"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="px-4 py-12">
                        {/* الشعار */}
                        <Image
                            src="/white-logo.png"
                            height={70}
                            width={70}
                            alt="Logo"
                            className="mx-auto mb-6 hover:opacity-90 transition-opacity duration-300"
                        />

                        {/* القائمة الرئيسية */}
                        {!showProducts ? (
                            <nav className="flex flex-col gap-4">
                                {mainLinks.map((link) => (
                                    <div key={link.id} className="border-b border-white/20 pb-2">
                                        {link.href ? (
                                            <Link
                                                href={link.href}
                                                className={commonStyles.link}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.title}
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={handleProductsClick}
                                                className={commonStyles.button}
                                            >
                                                {link.title}
                                                <GoPlus className="text-2xl " />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        ) : (
                            // قائمة المنتجات
                            <div className="animate-fade-left cust-trans text-white">
                                {/* زر الرجوع */}
                                <button
                                    onClick={handleBack}
                                    className="flex items-center mb-6 text-lg gap-2 cust-trans hover:text-white/80 "
                                >

                                    <RiArrowGoBackFill className="text-xl" />
                                    {selectedCategory ? selectedCategory : "المنتجات"}
                                </button>

                                {/* عرض الفئات أو المنتجات */}
                                {!selectedCategory ? (
                                    <div className="flex flex-col gap-4 text-white">
                                        {Object.keys(menuItems).map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={commonStyles.categoryButton}
                                            >
                                                {category}
                                                <GoPlus className="text-2xl " />
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-4 animate-fade-left text-white cust-trans">
                                        {menuItems[selectedCategory].map((item) => (
                                            <Link
                                                href={`/products/${item.id}`}
                                                key={item.id}
                                                className={commonStyles.productLink}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        {/* رابط عرض الكل */}
                                        <Link
                                            href="#"
                                            className="flex items-center justify-end gap-2 text-white hover:text-white/80 mt-2 cust-trans "
                                            onClick={() => setIsOpen(false)}
                                        >
                                            عرض الكل
                                            <IoIosArrowBack className="text-xl" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;