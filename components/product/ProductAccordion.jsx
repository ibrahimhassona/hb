"use client"
import React, { useState } from 'react';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import YouTubeEmbed from './YouTubeEmbed';
import { getYouTubeEmbedURL } from '@/utils/libs';
import { useTranslations } from 'next-intl';
import parse from 'html-react-parser'

const AccordionItem = ({ title, isOpen, className, onToggle, children, downloadable = false, product }) => {
    return (
        <div className={className}>
            <button
                className="w-full py-4 flex justify-between items-center text-right"
                onClick={onToggle}
            >
                <span className="text-md font-semibold text-primary ">{title}</span>
                <div className="text-primary ">
                    {isOpen ? <IoRemoveOutline size={24} className='cust-trans animate-flip-up' /> : <IoAddOutline size={24} className='cust-trans animate-flip-up' />}
                </div>
            </button>
            {isOpen && (
                <div className="text-right ">
                    {downloadable ? (
                        <>
                            {children}
                        </>

                    ) : (
                        <div className="">{children}</div>
                    )}
                </div>
            )}
        </div>
    );
};

const ProductAccordion = ({ product }) => {
    const [openSections, setOpenSections] = useState({
        productInfo: false,
        specifications: false,
        userGuide: false
    });
    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const specifications = [
        { label: 'اللون', value: 'تيتانيوم' },
        { label: 'المواد المصنعة', value: 'المنيوم - بلاستيك' },
        { label: 'الأبعاد', value: 'الطول:١٨/العرض:١٨/الارتفاع:٤٥ سم' },
        { label: 'السعة', value: '٥٠٠ مل' },
        { label: 'الضمان', value: '٢ سنة' },
        { label: 'صنع في', value: 'الصين' },
        { label: 'كود المنتج', value: 'SWir345017' }
    ];

    // ============= YouTube Url Handling ==========
    const embedUrl = getYouTubeEmbedURL(product?.video_url);
    const t = useTranslations('product')

    return (
        <div className="w-full mx-auto my-8">
            {/* معلومات المنتج */}
            <AccordionItem
                title={t("product_info")}
                isOpen={openSections.productInfo}
                onToggle={() => toggleSection('productInfo')}
                className={!openSections.productInfo ? 'border-b border-gray-200' : ''}
            >
                <div className="space-y-4 bg-[#E0E0E0] p-4 rounded-b-md overflow-hidden shadow-md cust-trans animate-flip-up text-start">
                    {product?.description && parse(product?.description)}
                </div>
            </AccordionItem>
            {/* ================= Specifications =============== */}
            <AccordionItem
                title={t("specifications")}
                isOpen={openSections.specifications}
                onToggle={() => toggleSection('specifications')}
                className={!openSections.specifications ? 'border-b border-gray-200' : ''}
            >
                <div className={`cust-trans animate-flip-up rounded-b-md overflow-hidden shadow-md`}>
                    {specifications.map((spec, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-2 justify-between p-3  ${index % 2 === 0 ? 'bg-[#f3f3f3]' : 'bg-[#E0E0E0]'
                                }`}
                        >
                            <span className="font-medium">{spec.label}</span>
                            <span>{spec.value}</span>
                        </div>
                    ))}
                </div>
            </AccordionItem>

            {/* ================= User Manual =============== */}
            <AccordionItem
                title={t("user_manual")}
                isOpen={openSections.userGuide}
                onToggle={() => toggleSection('userGuide')}
                downloadable
                className={!openSections.userGuide ? 'border-b border-gray-200' : ''}
            >
                <div className="flex flex-col justify-between cust-trans animate-flip-up ">
                    {['بيانات فنية', 'دليل استخدام المنتج'].map((item, index) => (
                        <div className={`flex items-center gap-2 justify-between  p-4 ${index == 0 ? 'bg-[#f3f3f3]' : 'bg-[#E0E0E0]'}`} key={index}>
                            <div className='flex items-center gap-2'>
                                <Image src='/singleProduct/File Send.png' alt='File Send' width={100} height={100} className='w-[30px] p-[5px] flex items-center justify-center rounded-full bg-green-50' />
                                <span className='text-lightGray font-semibold max-md:text-sm'>{item}</span>
                            </div>
                            <button className="text-primary flex items-center gap-2 hover:text-lightPrimary cust-trans">
                                <HiDownload size={20} />
                                <span className='max-md:text-sm'>تحميل</span>
                            </button>
                        </div>
                    ))}
                </div>
            </AccordionItem>
            {/* ================= Video =============== */}
            <AccordionItem
                title={t("video")}
                isOpen={openSections.video}
                onToggle={() => toggleSection('video')}
                downloadable
                className={!openSections.video ? 'border-b border-gray-200' : ''}>
                {product?.video_url ? <YouTubeEmbed videoId={embedUrl.split('/').pop()} /> : <p className='text-center text-darkGray'>{t('video_not_found')}</p>}
            </AccordionItem>
        </div>
    );
};

export default ProductAccordion;


