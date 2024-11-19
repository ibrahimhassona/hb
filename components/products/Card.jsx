"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { MdOutlineWavingHand } from 'react-icons/md';

// ProductCard Component

const Card = ({ item }) => {
    const locale = useLocale()
    const t = useTranslations("product")
    console.log(item.main_image)
    return (
        <Link
            href={`/products/${item.slug}`}
            className="group relative flex flex-col w-full bg-white rounded-lg border border-gray-100 cust-trans  overflow-hidden"
        >
            {item.isFeature && <div className='absolute bg-red-500 top-4 end-0 flex items-center gap-2 px-2 py-1 rounded-s-sm text-white z-20'>
                <MdOutlineWavingHand className=' animate-wiggle-more repeat-infinite' size={25} />
                <span className='text-sm'>{t('feature')}</span>
            </div>}
            {/* ========= Images ========== */}
            <div className="relative w-full pt-[100%] rounded-t-lg overflow-hidden bg-gray-100">
                <Image
                    src={item?.main_image?.url ? `${item?.main_image?.url}` : `/isNoavilable-${locale}.png`}
                    alt={item?.title || "Product Image"}
                    fill
                    className="object-cover cust-trans group-hover:scale-110"
                />
            </div>
            {/* ============= End Image ============= */}
            <div className="flex flex-col flex-grow p-4 space-y-3">
                <div className="flex items-center gap-2 justify-between max-sm:flex-col">
                    {/* ====== Category ======= */}
                    <span className="max-md:text-xs line-clamp-1 text-primary">{item?.sub_categories[0]?.title} </span>
                    {/*  ==== Price ===== */}
                    <span className="flex text-primary font-semibold  max-md:text-xs">
                        {item.price?.toLocaleString()} <span className='text-xs'>{t("sar")}</span>
                    </span>
                </div>

                {/* ====== Title ======= */}
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[40px]">
                    {item.title}
                </h3>
            </div>
        </Link>
    );
};

export default Card