"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { MdOutlineWavingHand } from 'react-icons/md';
import { HighlightedText } from '../navbar/SearchCtrl';
import Lables from '../product/Lables';

// ProductCard Component

const Card = ({ item, search, value }) => {
    const locale = useLocale()
    const t = useTranslations("product")
    return (
        <Link
            href={`/products/${item.slug}`}
            className="group relative flex flex-col w-full bg-white rounded-lg border border-gray-100 cust-trans  overflow-hidden"
        >
            <Lables product={item} />
            {/* ========= Images ========== */}
            <div className="relative w-full pt-[100%] rounded-t-lg overflow-hidden bg-gray-100">
                <Image
                    src={item?.images_url ? item?.images_url?.split(',')[0] : `/isNoavilable-${locale}.png`}
                    alt={item?.title || "Product Image"}
                    fill
                    className="object-cover cust-trans group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL={`/isNoavilable-${locale}.png`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            {/* ============= End Image ============= */}
            <div className="flex flex-col flex-grow p-4 space-y-3 max-sm:bg-gray-50">
                <div className="flex items-center gap-2 justify-between ">
                    {/* ====== Category ======= */}
                    <div className='flex items-center justify-start gap-1  max-sm:items-start'>
                    {item?.main_categories[0] &&  <span className="max-md:text-xs line-clamp-1 text-primary bg-green-100 px-2 text-xs py-1 max-lg:py-[1px] rounded-md">{item?.main_categories[0]?.title.slice(0, 15)} </span>}
                        {/* // {item?.sub_categories[1] && <span className="max-md:text-xs line-clamp-1 max-lg:hidden text-primary bg-green-100 px-2 text-xs py-1 rounded-md">{item?.sub_categories[1]?.title.slice(0, 10)} </span>} */}
                    </div>
                    {/*  ==== Price ===== */}
                    <span className="flex text-primary font-semibold  max-md:text-xs">
                        {item.price?.toLocaleString()} <span className='text-xs'>{t("sar")}</span>
                    </span>
                </div>
                <div className='flex w-full justify-between flex-col-reverse gap-1'>
                    {/* ====== SKU ======= */}
                    <h4 className="text-xs font-medium text-[10px] text-gray-400 flex items-center justify-end">
                        <span className='font-semibold '> {t("sku")} :{" "}</span>
                        {!search ?
                            <span>{item.SKU}</span> : <HighlightedText text={item.SKU} searchValue={value} />}
                    </h4>
                    {/* ====== Title ======= */}
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[40px] flex items-start text-start">
                        {!search ?
                            <span className=' line-clamp-2'>{item.title}</span> : <HighlightedText text={item.title} searchValue={value} />}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default Card