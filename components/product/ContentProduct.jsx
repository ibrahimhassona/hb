"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductSelect from './ProductSelect'
import parse from 'html-react-parser'
import SoldTogether from './SoldTogether'
import SelectColor from './SelectColor'


const ContentProduct = ({ product }) => {
    const t = useTranslations("product")
    return (
        <div className="w-[50%] max-lg:w-full text-start text-lightGray flex  flex-col justify-between">
            {/* ========= (Title & Description) & Price ========== */}
            <div className='flex items-start gap-4 max-sm:flex-col max-sm:gap-2 justify-between'>
                {/* -------- (Title & Description)  --------- */}
                <div className="mb-6 ">
                    {/* --- Sub Categories ----- */}
                    <div className='flex items-center gap-2 flex-wrap'>
                        {product?.sub_categories && product?.sub_categories.map((subcategory) => (
                            <Link
                                key={subcategory.slug}
                                href={`${process.env.NEXT_PUBLIC_BASE_URL}products?sub_category=${subcategory?.slug}`}
                                className="text-primary text-sm mb-2"
                            >
                                {subcategory?.title}
                            </Link>
                        ))}
                    </div>
                    <h1 className="text-2xl font-bold text-lightGray mb-4 ">{product?.title}</h1>
                    {product?.description && parse(product?.short_description)}
                </div>
                {/* --------- Price -------------- */}
                <div className="flex items-center justify-center max-sm:justify-between ">
                    <div className="flex justify-between items-center  mb-4 flex-col  max-sm:flex-row-reverse gap-2 w-full">
                        <span className="text-primary text-2xl font-bold">{Number(product?.price).toLocaleString()}<small className='text-xs text-lightGray mx-1'>{t('sar')}</small></span>
                        <span className="text-gray-500  max-sm:text-sm  max-sm:text-normal text-xs ">{t('tax_price')}</span>
                    </div>
                </div>
            </div>
            {/* Colors Select */}
            {product?.colors.length > 0 && <SelectColor title={t("color")} data={product?.colors} />}
            {/* --------------- Variants Options ------------- */}
            <ProductSelect product={product} />
            {/* --------------- Bought Together ------------- */}
           {product.bought_together.length > 0 && <SoldTogether product={product} />}
            {/* ---------------- Button -------------- */}
            <div className='flex items-center w-full max-sm:justify-center'>
                <button className="w-full bg-primary hover:bg-lightPrimary cust-trans text-white py-3 rounded-lg flex items-center justify-center gap-2 max-lg:w-fit px-4 ">
                    {t('purchase_from_site')}
                </button>
                <Image src='/buildStation.png' alt='build Station' width={400} height={200} className='w-[100px]' />
            </div>
            {/* ---------------- End Button -------------- */}
        </div>
    )
}
export default ContentProduct